defmodule ThescoreWeb.RushingController do
  use ThescoreWeb, :controller

  alias Thescore.Repo
  alias Thescore.Rushing
  alias Thescore.Rushing.Player

  @csv_header [
    "Player",
    "Team",
    "Pos",
    "Att/G",
    "Att",
    "Yrds",
    "Avg",
    "Yds/G",
    "TD",
    "Lng",
    "1st",
    "1st%",
    "20+",
    "40+",
    "FUM"
  ]

  def csv(conn, params) do
    conn =
      conn
      |> put_resp_content_type("text/csv")
      |> put_resp_header("content-disposition", "attachment; filename=rushing.csv")
      |> send_chunked(200)

    case stream_csv(conn, params) do
      {:ok, conn} -> conn
      _ -> send_resp(conn, 500, "csv streaming error")
    end
  end

  defp stream_csv(conn, params) do
    Repo.transaction(fn ->
      row_stream =
        Player
        |> Rushing.query(build_args(params))
        |> Repo.stream()
        |> Stream.map(&build_row/1)

      [@csv_header]
      |> Stream.concat(row_stream)
      |> CSV.encode()
      |> Stream.chunk_every(500)
      |> Stream.map(&Enum.join(&1, ""))
      |> Enum.reduce_while(conn, &transfer_chunk/2)
    end)
  end

  defp transfer_chunk(chunk, conn) do
    case chunk(conn, chunk) do
      {:ok, conn} -> {:cont, conn}
      {:error, :closed} -> {:halt, conn}
    end
  end

  defp build_row(%Player{} = player) do
    [
      player.name,
      player.team,
      player.position,
      player.attempts_per_game,
      player.attempts,
      player.yards,
      player.average,
      player.yards_per_game,
      player.touchdowns,
      player.longest_rush,
      player.first,
      player.first_percentage,
      player.twenty_plus,
      player.forty_plus,
      player.fumbles
    ]
  end

  defp build_args(params) do
    %{
      name: params["name"],
      team: params["team"],
      position: params["position"],
      order_by: builder_order_by(params)
    }
  end

  defp builder_order_by(%{"order" => order, "direction" => direction})
       when order in ["YARDS", "LONGEST_RUSH", "TOUCHDOWNS"] and direction in ["ASC", "DESC"] do
    %{
      order: String.to_atom(String.downcase(order)),
      direction: String.to_atom(String.downcase(direction))
    }
  end

  defp builder_order_by(_), do: nil
end
