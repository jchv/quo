const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index",
  resolve: {
    extensions: [".js", ".jsx", ".json", "*"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            ["env", { targets: { browsers: ["last 3 versions"] } }],
            "react"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff2?)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Status Page",
      filename: "index.html"
    })
  ]
};
