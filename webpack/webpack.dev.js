// webpack/webpack.dev.js
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [require("autoprefixer")]
							}
						}
					},
					"sass-loader"
				]
			}
		]
	},
	devServer: {
		static: path.resolve(__dirname, "../dist"),
		compress: true,
		port: 5888,
		hot: true,
		open: true,
		historyApiFallback: true
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development")
		})
	]
});
