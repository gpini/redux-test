var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'bin');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: "/bin/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.sass$/,
      loader: "style!css!sass"
    }]
  }
};

module.exports = config;
