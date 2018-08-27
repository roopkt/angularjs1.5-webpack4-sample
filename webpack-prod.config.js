const merge = require('webpack-merge')
const common = require('./webpack-common.config')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const pathsToClean = ['dist']

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  output: {
    filename: '[name]-bundle.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new CleanWebpackPlugin(pathsToClean)]
})
