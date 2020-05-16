'use strict'
const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: {
    common: './src/js/common.js',
    common2: './src/js/common2.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist/js'), // ビルドしたファイルを吐き出す場所(絶対パス)
    filename: '[name].js' // ビルド後のファイル名
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            // exclude: /node_modules/,
            loader: 'babel-loader',
          }
        ]
      },
      {
        enforce: 'pre', // このプロパティが無いloderより先に実行する
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: './eslintrc.js',
          fix: true,
        }
      }
    ]
  }
};
