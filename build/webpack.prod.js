const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const env = require('../config/prod.env');

module.exports = merge(base, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    })
  ]
});
