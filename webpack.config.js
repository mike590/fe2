var webpack = require('webpack');
var path = require('path');

var BUILD = path.resolve(__dirname, 'src/public');
var APP = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP + '/index.jsx',
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: './src'
  }
};

module.exports = config;
