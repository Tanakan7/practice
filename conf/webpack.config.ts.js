const path = require('path')

module.exports = {
  entry: {
    tsbundle: './src/ts/tsbundle.ts',
  },

  output: {
    path: path.resolve(__dirname, './../dist/js'), // ビルドしたファイルを吐き出す場所(絶対パス)
    filename: '[name].js' // エントリーで指定したプロパティ名が入る
  },

  // モジュールとして扱いたいファイルの拡張子を指定する
  // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
  // デフォルトは['.js', '.json']
  resolve: {
    extensions:['.ts','.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        // use: [
        //   {
        //     // exclude: /node_modules/,
        //     loader: 'babel-loader',
        //     options: {
        //       presets: [
        //         // ['env', {'modules': false, "browsers": ["last 2 versions", "safari >= 7"]}]
        //         ['env', {'modules': false}]
        //       ]
        //     }
        //   }
        // ]
      },
      // {
      //   enforce: 'pre', // このプロパティが無いloderより先に実行する
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     configFile: './eslintrc.js',
      //     fix: true,
      //   }
      // }
    ]
  }
};
