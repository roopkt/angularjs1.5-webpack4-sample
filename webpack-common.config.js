const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ENV = process.env.NODE_ENV || 'development'

const webpackConfigEntryPoints = {
  app: './bootstrap.ts'
}

const webpackConfigLoaders = [
  // Scripts
  {
    test: /\.ts$/,
    exclude: [/node_modules/],
    loader: 'ts-loader'
  },

  // Styles
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader']
  },

  // less
  {
    test: /\.less$/,
    include: path.join(__dirname, './src/styles'),
    loader: ['style-loader', 'css-loader', 'less-loader']
  },
  //images
  {
    test: /\.(jpg|jpeg|png|gif)(\?.*)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[hash].[ext]',
          publicPath: '/',
          outputPath: 'assets/images/'
        }
      }
    ]
  },
  //fonts
  {
    test: /\.(eot|otf|webp|ttf|woff|woff2|svg)(\?.*)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/fonts[name].[hash].[ext]',
          publicPath: '/',
          outputPath: 'assets/fonts/'
        }
      }
    ]
  },
  // HTML
  {
    test: /\.html$/,
    loader: 'raw-loader'
  }
]

const webpackConfigPlugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    inject: 'body',
    hash: true,
    env: ENV,
    host: '0.0.0.0',
    port: process.env.npm_package_config_port
  }),
  new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }])
]

module.exports = {
  devtool: 'source-map',
  context: path.resolve('src'),
  entry: webpackConfigEntryPoints,
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: ['.tsx', '.ts', '.js', '.html']
  },
  watch: true,
  module: {
    rules: webpackConfigLoaders
  },
  plugins: webpackConfigPlugins
}
