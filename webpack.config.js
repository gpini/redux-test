var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_PATH = 'bin';
var BUILD_DIR = path.resolve(__dirname, BUILD_PATH);
var CSS_FILE_NAME = 'styles.css';

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/' + BUILD_PATH + '/'
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
      loader: DEBUG ?
        // inline css for hot loader support
        'style!css?sourceMap!sass?sourceMap' :
        // extractes css for distribution
        ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
    }, {
      test: /\.css$/,
      loader: DEBUG ?
        // inline css for hot loader support
        'style!css?sourceMap' :
        // extractes css for distribution
        ExtractTextPlugin.extract('style!css')
    }]
  },
  plugins: [
    new ExtractTextPlugin(CSS_FILE_NAME)
  ]
};

module.exports = config;
