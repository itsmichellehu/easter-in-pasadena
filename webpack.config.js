const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");

const PATHS = {
	src: path.join(__dirname, "src")
};

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	resolve: {
		alias: {
			"@src": path.resolve(__dirname, "src"),
			"@assets": path.resolve(__dirname, "src/assets/"),
			"@scss": path.resolve(__dirname, "src/scss/"),
			"@components": path.resolve(__dirname, "src/components/")
		},
		extensions: [".js", ".json", ".scss", ".css"]
	},
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
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
								includePaths: [path.resolve(__dirname, "src/scss")],
								outputStyle: "expanded"
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new CleanWebpackPlugin(),
		new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*.{html,js,scss}`, { nodir: true }),
			safelist: {
				standard: [/^is-/, /^has-/]
			}
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: "dist", to: "dist" }]
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development")
		})
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
	mode: "development"
};
