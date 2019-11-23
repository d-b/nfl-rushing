defmodule ThescoreWeb.PageController do
  use ThescoreWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
