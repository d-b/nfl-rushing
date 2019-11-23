defmodule Thescore.Repo do
  use Ecto.Repo,
    otp_app: :thescore,
    adapter: Ecto.Adapters.Postgres
end
