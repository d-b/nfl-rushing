[
  import_deps: [
    :absinthe,
    :ecto,
    :phoenix,
    :plug
  ],
  inputs: [
    "*.{ex,exs}",
    "priv/*/seeds.exs",
    "priv/seeds/*.{ex,exs}",
    "{config,lib,test}/**/*.{ex,exs}"
  ],
  subdirectories: ["priv/*/migrations"]
]
