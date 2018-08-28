const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ENV = process.env.NODE_ENV || 'development'

const webpackConfigEntryPoints = {
  app: './index.ts'
}

const webpackConfigLoaders = [
  // Scripts
  {
    test: /\.ts$/,
    exclude: [/node_modules/],
    loader: 'ts-loader',
    include: [
      path.resolve(__dirname, 'src'),
    ]
  },

  // Styles
  {
    test: /\.css$/,
    use: ['style-loader', { loader: 'css-loader', options: { url: true } }],
    include: path.resolve(__dirname, 'assets')
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
    include: [
      path.resolve(__dirname, 'src'),
    ]
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
    include: path.resolve(__dirname, 'src')
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
  new CopyWebpackPlugin([
    { from: path.join(__dirname, 'phones'), to: 'src/phones' }
  ])
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
