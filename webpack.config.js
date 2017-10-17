const path = require('path');
const webpack = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const UglifyJsOptions = {
  comments: false,
  'screw-ie8': false,
  mangle: false,
  include: /\.js$/,
  sourceMap: false,
  compress: {
    drop_console: true,
    drop_debugger: true,
    dead_code: true,
    unsafe: true,
    warnings: false
  }
};

module.exports = {
  target: 'web',
  entry: {
    BrowserLanguageDetector: './src/BrowserLanguageDetector.full.js',
    BrowserLanguageDetectorCore: './src/BrowserLanguageDetector.core.js',
    NavigatorDetector: './src/detectors/NavigatorDetector.js',
    HTMLTagDetector: './src/detectors/HTMLTagDetector.js',
    QueryStringDetector: './src/detectors/QueryStringDetector.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    library: 'BrowserLanguageDetector',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new BundleAnalyzerPlugin(UglifyJsOptions)
  ]
};