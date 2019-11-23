defmodule Thescore.Rushing.Player do
  @moduledoc "The schema for a player along with their rushing data."

  use Thescore, :schema

  alias __MODULE__

  schema "rushing_players" do
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

  @fields ~w(name team position attempts attempts_per_game yards yards_per_game
             average touchdowns longest_rush first first_percentage twenty_plus
             forty_plus fumbles)a

  def changeset(%Player{} = player \\ %Player{}, attrs) do
    player
    |> cast(attrs, @fields)
    |> validate_required(@fields)
  end
end
