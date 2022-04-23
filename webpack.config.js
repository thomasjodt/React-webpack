const path = require('path')

const ruleForJavascript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
}
const rules = [ruleForJavascript]

module.exports = {
  entry: 'src/index.js',
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
}