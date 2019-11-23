defmodule Thescore.Seeds.Rushing do
  @moduledoc false

  alias Ecto.Multi

  alias Thescore.Repo
  alias Thescore.Rushing.Player

  def seed do
    "rushing.json"
    |> Path.expand(__DIR__)
    |> File.read!
    |> Jason.decode!
    |> Stream.map(&json_to_schema/1)
    |> Stream.chunk_every(500)
    |> Stream.with_index()
    |> Enum.reduce(Multi.new(), fn {chunk, index}, multi ->
      Multi.insert_all(
        multi,
        "players_chunk_#{index}",
        Player,
        chunk,
        on_conflict: :replace_all,
        conflict_target: [:name, :team, :position]
      )
    end)
    |> Repo.transaction()
  end

  defp json_to_schema(obj) do
    %{
      name: obj["Player"],
      team: obj["Team"],
      position: obj["Pos"],
      attempts: to_integer(obj["Att"]),
      attempts_per_game: to_float(obj["Att/G"]),
      yards: to_integer(obj["Yds"]),
      yards_per_game: to_float(obj["Yds/G"]),
      average: to_float(obj["Avg"]),
      touchdowns: to_integer(obj["TD"]),
      longest_rush: to_integer(obj["Lng"]),
      first: to_integer(obj["1st"]),
      first_percentage: to_float(obj["1st%"]),
      twenty_plus: to_integer(obj["20+"]),
      forty_plus: to_integer(obj["40+"]),
      fumbles: to_integer(obj["FUM"])
    }
  end

  defp to_float(value) when is_integer(value), do: value / 1

  defp to_float(value) when is_float(value), do: value

  defp to_float(value) when is_binary(value) do
    {result, _} = Float.parse(value)
    result
  end

  defp to_integer(value) when is_integer(value), do: value

  defp to_integer(value) when is_binary(value) do
    {result, _} = Integer.parse(value)
    result
  end  
end
