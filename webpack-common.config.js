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
  // images/fonts
  {
    test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    use: 'base64-inline-loader',
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
  new CopyWebpackPlugin([{ from:path.join( __dirname,'/src/phones'), to: 'phones' }])
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
