const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: './components/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.css$/, use: 'css-loader' }
    ]
  },
  output: {
    path: __dirname + '/client/public',
    filename: 'bundle.js',
  }
  };