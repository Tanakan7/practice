echo "----- [build_html.sh] -----"
ejs-cli \
  --base-dir src/ejs/html/ 'hoge.ejs' \
  --out dist/ \
  --options src/ejs/data/bundle.json
