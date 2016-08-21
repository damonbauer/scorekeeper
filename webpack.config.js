var DashboardPlugin = require('webpack-dashboard/plugin');
var DashboardPluginConfig = new DashboardPlugin();
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractTextPluginConfig = new ExtractTextPlugin("[name].css");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    publicPath: '/',
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-function-bind']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ],
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
    DashboardPluginConfig
  ]
}
