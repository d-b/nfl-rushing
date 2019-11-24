defmodule ThescoreWeb.RushingResolver do
  @moduledoc false

  use ThescoreWeb, :resolver

  alias Thescore.Rushing
  alias Thescore.Rushing.Player

  def search(args, _resolution) do
    Player
    |> Rushing.query(args)
    |> Connection.from_query(&Repo.all/1, args)
  end
end
