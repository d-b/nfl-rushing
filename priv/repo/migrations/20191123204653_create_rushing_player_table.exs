defmodule Thescore.Repo.Migrations.CreateRushingPlayerTable do
  use Ecto.Migration

  def change do
    create table("rushing_players", primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :name, :citext, null: false
      add :team, :citext, null: false
      add :position, :citext, null: false
      add :attempts, :integer, null: false
      add :attempts_per_game, :float, null: false
      add :yards, :integer, null: false
      add :yards_per_game, :float, null: false
      add :average, :float, null: false
      add :touchdowns, :integer, null: false
      add :longest_rush, :integer, null: false
      add :first, :integer, null: false
      add :first_percentage, :float, null: false
      add :twenty_plus, :integer, null: false
      add :forty_plus, :integer, null: false
      add :fumbles, :integer, null: false
    end

    create unique_index("rushing_players", [:name, :team, :position])

    create index("rushing_players", ["name gin_trgm_ops"],
             name: :rushing_players_name_trigram_index,
             using: "GIN"
           )
  end
end
