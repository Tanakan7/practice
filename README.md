# about

- １枚以上の静的ページを作成するためのボイラープレート


## install

    ※ jq に依存しています
    brew install jq
    yarn


## commands

### build

    yarn build

### develop

    yarn start


### clean dist

    yarn clean


## about directory

```
.
├── src
│   ├── ejs
│   │   ├── data                        // ダミーデータ等用の変数群
│   │   │   ├── bundle.json
│   │   │   ├── common
│   │   │   │   ├── default.json
│   │   │   │   └── nav.json
│   │   │   └── module
│   │   │       ├── sample.json
│   │   │       └── shop-list.json
│   │   ├── html                        // HTMLファイル
│   │   │   ├── hoge.ejs
│   │   │   ├── index.ejs               // 一覧ページ（マークアップファイル一覧表示用）
│   │   │   └── template.ejs
│   │   └── include                     // モジュール群
│   │       ├── common                  // 共通モジュール
│   │       │   ├── footer.ejs
│   │       │   ├── head.ejs
│   │       │   ├── header.ejs
│   │       │   └── nav.ejs
│   │       └── module                  // 通常モジュール
│   │           ├── main-visual.ejs
│   │           ├── sample.ejs
│   │           └── slider.ejs
│   ├── img
│   ├── js
│   │   ├── common.js                   // バンドルを行なうJS
│   │   ├── common2.js
│   │   └── module                      // 個別のJS
│   │       ├── _sample.js
│   │       └── _sample2.js
│   └── scss
│       ├── module                      // 各種scssファイル群(フォルダ分けする予定)
│       │   ├── _common.scss
│       │   ├── _content.scss
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   ├── _main-visual.scss
│       │   ├── _reset.scss
│       │   └── _variable.scss
│       ├── style.scss
│       └── style2.css
├── bin                                 // 各種環境用の設定ファイル群
│   ├── build_css.sh
│   ├── build_data.sh
│   ├── build_html.sh
│   ├── build_img.sh
│   └── build_js.sh
├── conf                                // webpack用の設定ファイル(フォルダ自体は廃止予定)
│   └── webpack.config.js
├── dist                                // ビルド後のファイルの格納先
│   ├── css
│   │   └── style.css
│   ├── hoge.html
│   ├── index.html
│   ├── js
│   │   ├── common.js
│   │   └── common2.js
│   └── template.html
├── eslintrc.js                         // (ルートディレクトリに置かないとエディタで設定が反映されない?)
├── package-lock.json
├── package.json
├── postcss.config.js                   // 現在不使用
├── postcss.json                        // 現在不使用
├── README.md
├── stylelintrc.js
└── yarn.lock
```

## TODO
- [ ] huskyで `add .` にならないよう修正(選択的にaddしたときにそのファイルのみコミットしたい)
- [ ] huskyでコミット前にビルドする(削除されるべきファイルが残る問題を避けるため)
- [ ] サンプルmodule をフォルダ単位でまとめる
- [ ] index.html 自動でファイル一覧を表示させる
- [ ] readmeにディレクトリ構造記述
- [ ] jq依存をなんとかする
- [ ] hbsに変えた方がいいかも(vscodeの補完などがejsだと不便)
- [ ] scssフォルダ内をモジュール群とそうでないものとに分ける
- [ ] /confフォルダをなくし、webpack.config.jsを移動する
- [ ] scssコンパイルが一つのファイルしかできていない
