const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
const ruleForCss = {
  test: /\.(sa|sc|c)ss$/i,
  use: ['style-loader', 'css-loader', 'sass-loader'],
}
const rules = [ruleForJavascript, ruleForHtml, ruleForCss]

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
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
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
}