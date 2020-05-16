module.exports = {
  extends: ['standard'],
  parser: 'babel-eslint',
  env: {
    // 使用環境設定
    browser: true,
  },
  rules: {
    // use strictを許可
    'strict': 0,
    // console メソッドを警告
    'no-console': 1,
    // 末尾のカンマ
    "comma-dangle": ["error", "always-multiline"],
    // 以下、vertical align関連の設定。好き嫌い分かれると思います。prettierを入れてないのもこの為です。
    // 変数宣言時など、値の縦位置を揃えたい
    "no-multi-spaces": 0,
    // オブジェクトプロパティの後のスペース
    "key-spacing": 0,
    // カンマの前にくるスペース
    "comma-spacing": 0,
  },
};
