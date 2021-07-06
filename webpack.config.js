const { ESBuildMinifyPlugin } = require("esbuild-loader")

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.js$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx", // Remove this if you're not using JSX
          target: "es2015", // Syntax to compile to (see options below for possible values)
        },
      },
    ],
    optimization: {
      minimizer: [
        new ESBuildMinifyPlugin({
          target: "es2015", // Syntax to compile to (see options below for possible values)
          css: true, // Apply minification to CSS assets
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
  },
}
