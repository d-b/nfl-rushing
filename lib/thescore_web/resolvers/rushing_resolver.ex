defmodule ThescoreWeb.RushingResolver do
  @moduledoc false

  use ThescoreWeb, :resolver

  alias Thescore.Rushing.Player

  def search(args, _resolution) do
    Player
    |> order_by(:average)
    |> Connection.from_query(&Repo.all/1, args)
  end
end
