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
        loader: 'babel-loader',
        include: APP,
        test: /\.jsx?/
      }
    ]
  }
};

module.exports = config;
