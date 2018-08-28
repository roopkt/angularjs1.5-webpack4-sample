const path = require('path')
const webpackConfig = require('./webpack-prod.config')
const entry = 'test_index.js'
const files = [{ pattern: entry, watched: false }]

const preprocessors = {
  [entry]: ['webpack', 'sourcemap']
}

const plugins = [
  require('karma-jasmine'),
  require('karma-chrome-launcher'),
  require('karma-webpack'),
  require('karma-tfs-reporter'),
  require('karma-sourcemap-loader'),
  require('karma-coverage')
]

const frameworks = ['jasmine']
const reporters = [
  { type: 'html', subdir: 'report-html' },
  { type: 'lcov', subdir: 'report-lcov' },
  { type: 'text-summary' }
]

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: frameworks,

    // list of files to exclude
    exclude: [],

    // list of files / patterns to load in the browser
    // we are building the test environment in ./spec-bundle.js
    files: files,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: preprocessors,
    webpack: webpackConfig,

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'tfs', 'coverage'],

    coverageReporter: {
      reporters: reporters
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Timeout for capturing a browser (in ms)
    captureTimeout: 6000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    plugins: plugins
  })
}
