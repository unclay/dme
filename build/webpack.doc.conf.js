var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var pkg = require('../package')

var config = {
  entry: {
    app: './src/demos/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/', pkg.version),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(css|less)$/,
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/demos/index.html'),
      chunks: []
    })
  ]
}


module.exports = config