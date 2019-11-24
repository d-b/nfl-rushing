defmodule ThescoreWeb.Schema.RushingTypes do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  connection(node_type: :rushing_player)

  @desc "A player along with their rushing stats"
  node object(:rushing_player) do
    field :name, :string
    field :team, :string
    field :position, :string
    field :attempts, :integer
    field :attempts_per_game, :float
    field :yards, :integer
    field :yards_per_game, :float
    field :average, :float
    field :touchdowns, :integer
    field :longest_rush, :integer
    field :first, :integer
    field :first_percentage, :float
    field :twenty_plus, :integer
    field :forty_plus, :integer
    field :fumbles, :integer
  end
end
