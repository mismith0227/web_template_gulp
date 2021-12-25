const config = require('./config')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: config.envProduction ? 'production' : 'development',
  entry: [path.join(__dirname, `${config.tasks.webpack.src}`)],
  output: {
    path: path.join(__dirname, config.tasks.webpack.dist),
    filename: config.tasks.webpack.filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modeles/,
        loader: 'babel-loader'
      },
      {
        // node_module内のcss
        test: /node_modules\/(.+)\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { url: false }
          }
        ],
        sideEffects: true // production modeでもswiper-bundle.cssが使えるように
      }
    ]
  }
}
