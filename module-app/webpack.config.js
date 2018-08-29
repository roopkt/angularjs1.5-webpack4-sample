const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const appDir = __dirname
const ENV = process.env.NODE_ENV || 'production'
const dist = path.resolve(appDir, '../dist/')
const pathsToClean = [dist]
const webpackConfigEntryPoints = {
  app: './index.ts'
}

const webpackConfigLoaders = [
  // Scripts
  {
    test: /\.ts$/,
    exclude: [/node_modules/],
    loader: 'ts-loader',
    include: [appDir]
  },
  // Styles
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    include: [appDir, path.resolve(appDir, '../node_modules/bootstrap')]
  },

  // less
  {
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader' // creates style nodes from JS strings
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
        options: { url: true }
      },
      {
        loader: 'less-loader' // compiles Less to CSS
      }
    ],
    include: [path.resolve('assets')]
  },

  // images/fonts
  {
    test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    use: 'base64-inline-loader'
  },

  // HTML
  {
    test: /\.html$/,
    loader: 'raw-loader',
    include: [appDir]
  }
]

const webpackConfigPlugins = [
  new CopyWebpackPlugin([
    {
      from: path.resolve(appDir, '../phones/'),
      to: 'phones/',
      force: true
    }
  ]),
  new CleanWebpackPlugin(pathsToClean)
]

module.exports = {
  mode: ENV,
  devtool: 'source-map',
  context: path.resolve(appDir),
  entry: webpackConfigEntryPoints,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.html']
  },
  watch: true,
  module: {
    rules: webpackConfigLoaders
  },
  plugins: webpackConfigPlugins,
  output: {
    filename: 'phone-module-bundle.js',
    libraryTarget: 'umd',
    path: dist
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
}
