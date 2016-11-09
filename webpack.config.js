const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: `${__dirname}/src/index.js`,

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ],

  resolve: {
    root: `${__dirname}/src`,

    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
