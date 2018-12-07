echo "----- [build_data.sh] -----"

# それらをdataプロパティの中に格納したbundle.jsonを生成
jq -s add src/ejs/data/common/*.json src/ejs/data/module/*.json | \
  jq '{"data":.}' \
  > src/ejs/data/bundle.json
