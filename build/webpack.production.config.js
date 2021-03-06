'use strict'

const merge = require('lodash.merge')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const baseConfig = require('./webpack.base.config')
const cfg = require('../config')

module.exports = merge(baseConfig, {
	entry: './client/index.js',
	output: {
		path: `${__dirname}/../server/static/dist`,
		publicPath: '/static/dist/'
	},
	performance: {
		hints: 'warning'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.DefinePlugin({
			DEVMODE: false
		}),
		new ExtractTextPlugin('style.css')
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babili']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]__[local]__[hash:base64:5]'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [
									// Dynamically targeted autoprefixing
									autoprefixer({
										browsers: cfg.get('BROWSER_SUPPORT')
									})
								]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								indentedSyntax: true
							}
						}
					],
					fallback: 'style-loader'
				})
			}
		]
	}
})
