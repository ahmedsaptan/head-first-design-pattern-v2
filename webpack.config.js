const path = require("path");

module.exports = {
  entry: {
    "./strategy/dist/bundle": "./strategy/src/index.ts",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname + "/"),
  },
};
