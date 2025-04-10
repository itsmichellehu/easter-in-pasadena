// webpack/webpack.dev.js
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "eval-source-map",
	devServer: {
		static: "../dist",
		hot: true,
		port: 5888,
		historyApiFallback: true,
		watchFiles: ["../src/**/*", "../dist/**/*"],
		liveReload: true
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development")
		})
	]
});
