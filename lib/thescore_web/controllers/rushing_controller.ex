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
      |> Stream.map(&Enum.join(&1, "\r\n"))
      |> Enum.into(conn)
    end)
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
    %{}
  end
end
