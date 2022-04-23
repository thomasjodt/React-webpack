const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')


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
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@styles':path.resolve(__dirname, './src/styles/'),
    },
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
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ]
  }
}