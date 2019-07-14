const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: 'style-loader!css-loader!sass-loader'
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: 'babel-loader'
			},
			{
				test: /\.js$/,
				include: /fabric-ui/,
				loader: 'babel-loader'
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf)$/,
				loader: 'file-loader'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(['css-loader'])
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue']
	},
	plugins: [
		new ExtractTextPlugin('style/[name].css'),
		new VueLoaderPlugin()
	]
};
