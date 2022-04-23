const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ruleForJavascript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
}
const ruleForHtml = {
  test: /\.html$/,
  use: {loader: 'html-loader'},
}
const rules = [ruleForJavascript, ruleForHtml]

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    port: 8080,
    open: true,
    compress: true,
    static: {directory: path.join(__dirname, 'dist')}
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {rules},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ]
}