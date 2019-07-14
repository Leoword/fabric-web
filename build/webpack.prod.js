const webpackBase = require('./webpack.base');

webpackBase.entry = {
	bundle: [
		path.resolve(__dirname, '../index.js')
	]
};

module.exports = webpackBase;