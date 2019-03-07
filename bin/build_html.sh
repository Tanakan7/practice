echo "----- [build_html.sh] -----"

ejs-cli \
  --base-dir src/ejs/html "**/*.ejs" \
  --out dist/ \
  --options src/ejs/data/bundle.json

echo "--- < beautifying... > ---"

# 整形
js-beautify \
  --replace "dist/*.html" \
  --indent-size 2
