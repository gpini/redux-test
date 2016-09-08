var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_PATH = 'dist';
var BUILD_DIR = path.resolve(__dirname, BUILD_PATH);
var CSS_FILE_NAME = 'styles.css';
var extractTextPlugin = new ExtractTextPlugin(CSS_FILE_NAME);
var htmlPlugin = new HtmlWebpackPlugin({
  template: 'index.html'
});

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: BUILD_PATH + '/'
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
        ExtractTextPlugin.extract('style', 'css!sass')
    }, {
      test: /\.css$/,
      loader: DEBUG ?
        // inline css for hot loader support
        'style!css?sourceMap' :
        // extractes css for distribution
        ExtractTextPlugin.extract('style', 'css')
    }]
  },
  plugins: DEBUG ? [
    htmlPlugin
  ] : [
    extractTextPlugin,
    htmlPlugin,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = config;
