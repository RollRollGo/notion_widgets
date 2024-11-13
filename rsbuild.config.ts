import { pluginReact } from "@rsbuild/plugin-react";

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|ttf)$/,
        type: "asset",
      },
    ],
  },
  plugins: [pluginReact()],
};
