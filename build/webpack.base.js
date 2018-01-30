const path = require('path');

module.exports = {
  entry: './source/app.js',
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../source'),
      '$styles': path.resolve(__dirname, '../source/assets/styles'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}
