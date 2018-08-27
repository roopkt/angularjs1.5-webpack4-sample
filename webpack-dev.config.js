const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack-common.config');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        publicPath: "/",
        contentBase: path.resolve(__dirname, "src"),
        historyApiFallback: {
          index: "/",
        },
        port: 3000,
        inline: true,
        https: false,
        quiet: false,
        compress: true,
      }
});