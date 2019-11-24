defmodule Thescore.Repo.Migrations.CreateExtensions do
  use Ecto.Migration

  def up do
    execute "CREATE EXTENSION IF NOT EXISTS citext;"
    execute "CREATE EXTENSION IF NOT EXISTS pg_trgm;"
  end
end
