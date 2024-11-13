import { pluginReact } from "@rsbuild/plugin-react";

module.exports = {
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset",
      },
    ],
  },
  plugins: [pluginReact()],
};
