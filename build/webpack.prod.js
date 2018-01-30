const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptmizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier');

const env = require('../config/prod.env');

module.exports = merge(base, {
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
    new ExtractTextPlugin({
      filename: '../dist/css/app.css'
    }),
    new OptmizeCSSPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
    new WebpackNotifierPlugin({title: 'Webpack'})
  ]
});
