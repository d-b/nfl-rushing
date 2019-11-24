defmodule ThescoreWeb.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema, :modern

  alias Thescore.Rushing

  alias ThescoreWeb.RushingResolver

  import_types Absinthe.Type.Custom
  import_types ThescoreWeb.Schema.RushingTypes

  node interface do
    resolve_type fn
      %Rushing.Player{}, _ ->
        :rushing_player

      _, _ ->
        nil
    end
  end

  query do
    @desc "A relay connection for querying player rushing data."
    connection field :rushing_players, node_type: :rushing_player do
      resolve &RushingResolver.search/2
    end
  end
end
