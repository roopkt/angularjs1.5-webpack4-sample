const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const appDir = __dirname
const moduleDir = path.join(__dirname, '../module-app/')
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
    include: [appDir, moduleDir]
  },
  // Styles
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    include: [
      moduleDir,
      appDir,
      path.resolve(appDir, '../node_modules/bootstrap')
    ]
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
    include: [appDir, moduleDir]
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
    {
      from: path.resolve(appDir, '../phones/'),
      to: 'phones/',
      force: true
    }
  ])
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
  plugins: webpackConfigPlugins
}
