const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: './src/js/common.js',

  mode: 'development',

  output: {
    path: path.resolve(__dirname, './../dist/js'), //'/../dist/js', //ビルドしたファイルを吐き出す場所(絶対パス)
    filename: 'bundle.js' //ビルドした後のファイル名
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            // exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  }
};
