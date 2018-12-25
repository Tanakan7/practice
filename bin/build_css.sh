echo "----- [build_css.sh] -----"

stylelint --config conf/stylelintrc.js src/scss/**/*.scss --syntax scss

### postcss版

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
#   --parser postcss-scss

  # --syntax postcss-scss \

### node-sass版

node-sass src/scss/style.scss \
  --output dist/css/ \
  --output-style compressed

postcss dist/css/style.css \
  --replace \
  --use autoprefixer css-mqpacker \
  --no-map
