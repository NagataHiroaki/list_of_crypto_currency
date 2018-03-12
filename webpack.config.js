const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const PATH = require('path');

const SCSS_PATH = PATH.join(__dirname, './src/scss');
const CSS_PATH = PATH.join(__dirname, './dist/common/css');
const TS_PATH = PATH.join(__dirname, './src/ts');
const JS_PATH = PATH.join(__dirname, './dist/common/js');
// const JS_DIST_PATH = PATH.join(__dirname, './dist/common/js');
const JS_DIST_PATH = PATH.join(__dirname, './');


module.exports = [
	{
		entry: {
			'app': SCSS_PATH + '/app.scss'
		},
		output: {
			path: CSS_PATH,
			filename: '[name].css'
		},
		module: {
			rules: [
				{
					test: /.scss$/,
					use: ExtractTextPlugin.extract({
						// use: ["css-loader", "sass-loader"]
						use: ["css-loader",　"postcss-loader", "sass-loader"]
					})
				},
				{
					test: /.(gif|jpg|png|svg|otf|ttf|woff|eot)$/,
					use: {
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							emitFile: false
						}
					}
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('[name].css'),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: "jquery"
			})
			// new StyleLintPlugin()
		]
	},
	{
		entry: {
			'main': TS_PATH + '/main.ts'
		},
		output: {
			path: JS_PATH,
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
				test: /.ts$/,
				use: ['ts-loader']
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.js', '.json']
		}
  //   ////以下の処理は圧縮したい場合に使用する
	// 	// plugins: [
	// 	// 	new webpack.optimize.UglifyJsPlugin()
	// 	// ]
	}
];
