echo "----- [build_data.sh] -----"
doHtmlBuild="buildByWatch"

# それらをdataプロパティの中に格納したbundle.jsonを生成
jq -s add src/ejs/data/common/*.json src/ejs/data/module/*.json | \
  jq '{"data":.}' \
  > src/ejs/data/bundle.json

# コマンドライン引数が無いとき変数を囲むダブルクォート無いとエラー出る(以下)
if [ "$1" = "$doHtmlBuild" ]; then
  echo "--- < buildByWatch > ---"
  npm run build:html
  browser-sync reload
else
  echo "--- < normal > ---"
fi
