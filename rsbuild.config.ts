import { pluginReact } from "@rsbuild/plugin-react";

module.exports = {
  source: {
    entry: {
      quote_machine: "./src/quote_machine_of_Chibi_Maruko_chan/index.tsx",
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|ttf)$/,
        type: "asset",
      },
    ],
  },
  plugins: [pluginReact()],
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/",
  },
};
