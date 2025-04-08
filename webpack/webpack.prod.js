// webpack/webpack.prod.js
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");
const common = require("./webpack.common");

const PATHS = {
	src: path.join(__dirname, "../src")
};

module.exports = merge(common, {
	mode: "production",
	devtool: false,
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [require("autoprefixer")]
							}
						}
					},
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								includePaths: [path.resolve(__dirname, "../src/scss")],
								outputStyle: "compressed"
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "index.css"
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*.{html,js,scss}`, { nodir: true }),
			safelist: {
				standard: [/^is-/, /^has-/]
			}
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	],
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	}
});
