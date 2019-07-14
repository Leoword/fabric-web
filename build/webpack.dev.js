const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackBase = require('./webpack.base');

webpackBase.mode = 'development';

webpackBase.entry = {
	bundle: [
		path.resolve(__dirname, '../test/index.js')
	]
};

webpackBase.plugins.push(new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.resolve(__dirname, './template/index.html'),
	inject: 'head'
}));

webpackBase.devtool = 'source-map';

module.exports = webpackBase;