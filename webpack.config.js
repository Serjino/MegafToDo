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
          {
            test: /\.(css|scss|sass)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
          },
          {
            test: /\.(png|jpg|webp|gif|mp4)$/,
            use: [
              {
                loader: 'file-loader',
              },
            ],
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
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true
	},
	// optimization: {
	// 	runtimeChunk: "single",
	// },
};
