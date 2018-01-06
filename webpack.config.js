const webpack = require('webpack'),
	path = require('path');
	// ExtractTextPlugin = require('extract-text-webpack-plugin'),
	// Dotenv = require('dotenv-webpack');

module.exports = {
	entry: {
		app: './client/index.jsx'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist/assets')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread', 'async-to-promises'] }
					}
				]
			},
			// {
			// 	test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpe?g|ico|json)$/,
			// 	use: [{
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: '[name].[ext]',
			// 			publicPath: (process.env.NODE_ENV == 'production' ? 'https://assets.learnskin.com' : 'http://localhost:4001'),
			// 			outputPath: '/'
			// 		}
			// 	}]
			// },
			// {
			// 	test: /global\.css$/,
			// 	loader: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		use: [
			// 			{
			// 				loader: 'css-loader',
			// 				options: {
			// 					modules: false,
			// 					importLoaders: 1
			// 				}
			// 			},
			// 			'postcss-loader'
			// 		]
			// 	})
			// },
			// {
			// 	test: /\.css$/,
			// 	exclude: [/node_modules/, /global\.css$/],
			// 	use: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		use: [
			// 			{
			// 				loader: 'css-loader',
			// 				options: {
			// 					modules: true,
			// 					importLoaders: 1,
			// 					root: './src',
			// 					localIdentName: '[path][name]__[local]--[hash:base64:5]'
			// 				}
			// 			},
			// 			'postcss-loader'
			// 		]
			// 	})
			// }
			//loaders for other file types can go here
		]
	},
	// plugins: [
	// 	new ExtractTextPlugin('styles.css'),
	// 	new Dotenv(),
	// 	new webpack.DefinePlugin({
	// 		'process.env.VERSION': JSON.stringify(require('./package.json').version)
	// 	})
	// ]
};