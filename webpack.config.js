const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './static/js'),
  entry: {
    app: './main.js',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'static/js'),
      'node_modules'
      ],
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  plugins: [
  //   new webpack.ProvidePlugin({
  //     'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'  // fetch API
  //   }),
  //   // Shared code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js',
      minChunks: Infinity
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'static/js'),
        loader: 'babel-loader'
      }
      ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
};
