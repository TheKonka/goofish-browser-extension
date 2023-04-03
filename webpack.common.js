const path = require('path');

module.exports = {
	entry: {
		background: './src/background.ts',
	},
	devtool: false,
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	plugins: [],
};
