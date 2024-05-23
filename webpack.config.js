const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src", "index.tsx"),
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
          template: path.resolve(__dirname, "src", "index.html")
        }),
      ],
	devServer: {
		static: "./dist",
	},
	// optimization: {
	// 	runtimeChunk: "single",
	// },
};
