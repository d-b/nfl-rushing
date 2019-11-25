defmodule Thescore.Rushing do
  @moduledoc "Context for querying player rushing data."

  use Thescore, :context

  def query(query, args), do: Enum.reduce(args, query, &build_query/2)

  defp build_query({:name, name}, query) when is_binary(name) and byte_size(name) > 0 do
    where(query, [p], fragment("similarity(?, ?) > 0.3", p.name, ^name))
  end

  defp build_query({:position, position}, query)
       when is_binary(position) and byte_size(position) > 0 do
    where(query, [p], p.position == ^String.trim(position))
  end

  defp build_query({:team, team}, query) when is_binary(team) and byte_size(team) > 0 do
    where(query, [p], p.team == ^String.trim(team))
  end

  defp build_query({:order_by, %{direction: direction, order: order}}, query)
       when direction in [:asc, :desc] and order in [:yards, :longest_rush, :touchdowns] do
    order_by(query, [p], [{^direction, field(p, ^order)}])
  end

  defp build_query({:order_by, _}, query) do
    order_by(query, desc: :yards)
  end

  defp build_query(_, query), do: query
end
