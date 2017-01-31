var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.browser.js',
  },
  externals: [
    {
      firedux: true,
      firebase: true,
      lodash: '_',
      updeep: true
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        // include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        // include: __dirname
      }
    ]
  }
}
