echo "----- [build_css.sh] -----"

stylelint --config conf/stylelintrc.js src/scss/**/*.scss

node-sass src/scss/style.scss \
  --output dist/css/ \
  --output-style compressed

postcss dist/css/style.css \
  --replace \
  --use autoprefixer css-mqpacker \
  --no-map

# postcss版

### バグ：拡張子が.scssのままコンパイルされてしまう

# postcss src/scss/**/[^_]* \
#   --dir dist/css \
#   --use \
#     postcss-import \
#     postcss-nesting \
#     postcss-simple-vars \
#     cssnano \
#     autoprefixer \
#     css-mqpacker \
#   --no-map \
#   --syntax postcss-scss

# 複数のimport.scssがある前提で設計する。ページ別で別々のスタイルを適用したい場合のため。
# 相当いろいろ試したが、node-sassで複数のinputを設定するのはできなさそう

# postcssオンリーで実行しようとして現在断念中
# cssnano postcss-importはnode-sass使うなら不要
# first/conf/postcss.config.js も不要
# style2.scss, _content2.scss も不要
# stylelint --config conf/stylelintrc.js src/scss/*.scss && \

# postcss src/scss/style.scss -d dist/css/ \
#   --use autoprefixer css-mqpacker \
#   --no-map
