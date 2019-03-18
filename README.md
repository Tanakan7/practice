# about

- １枚以上の静的ページを作成するためのボイラープレート


## install

    ※ jq に依存しています
    brew install jq
    yarn


## commands

### build

    yarn build

### develop and build server

    yarn start


### clean dist

    yarn clean


## about directory

    追記予定

## TODO
- [ ] huskyで `add .` にならないよう修正(選択的にaddしたときにそのファイルのみコミットしたい)
- [ ] huskyでコミット前にビルドする(削除されるべきファイルが残る問題を避けるため)
- [ ] サンプルmodule をフォルダ単位でまとめる
- [ ] index.html 自動でファイル一覧を表示させる
- [ ] readmeにディレクトリ構造記述
- [ ] jq依存をなんとかする
- [ ] hbsに変えた方がいいかも(vscodeの補完などがejsだと不便)
