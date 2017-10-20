// https://github.com/Tomekmularczyk/react-starter
import path from 'path';
import webpack from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

const UglifyJsOptions = {
  comments: false,
  screw_ie8: true,
  mangle: false,
  include: /\.(js)$/,
  sourceMap: false,
  compress: {
    drop_console: false,
    drop_debugger: true,
    dead_code: true,
    unsafe: true,
    warnings: false,
    unused: true
  }
};

module.exports = {
  target: 'web',
  entry: {
    BrowserLanguageDetector: ['./src/polyfills.js', './src/BrowserLanguageDetector.full.js'],
    BrowserLanguageDetectorCore: ['./src/polyfills.js', './src/BrowserLanguageDetector.core.js'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: false
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
    new webpack.optimize.UglifyJsPlugin(UglifyJsOptions),
    new BundleAnalyzerPlugin()
  ]
};