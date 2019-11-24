defmodule ThescoreWeb.RushingResolver do
  @moduledoc false

  use ThescoreWeb, :resolver

  alias Thescore.Rushing.Player

  def search(args, _resolution) do
    args |> IO.inspect(label: "args")
    Player
    |> filter_query(args)
    |> Connection.from_query(&Repo.all/1, args)
  end

  defp filter_query(query, args), do: Enum.reduce(args, query, &build_query/2)

  defp build_query({:name, name}, query) when is_binary(name) and byte_size(name) > 0 do
    where(query, [p], fragment("similarity(?, ?) > 0.3", p.name, ^name))
  end

  defp build_query({:position, position}, query) when is_binary(position) and byte_size(position) > 0 do
    where(query, [p], p.position == ^String.trim(position))
  end

  defp build_query({:team, team}, query) when is_binary(team) and byte_size(team) > 0 do
    where(query, [p], p.team == ^String.trim(team))
  end

  defp build_query({:order_by, %{direction: direction, order: order}}, query) do
    order_by(query, [p], [{^direction, field(p, ^order)}])
  end

  defp build_query({:order_by, _}, query) do
    order_by(query, asc: :yards)
  end  

  defp build_query(_, query), do: query
end
