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
        exclude: /node_modules/,
        use: [
          {
            // exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                // ['env', {'modules': false, "browsers": ["last 2 versions", "safari >= 7"]}]
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      },
      {
        enforce: 'pre', // このプロパティが無いloderより先に実行する
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: './conf/eslintrc.js'
        }
      }
    ]
  }
};
