echo "----- [build_data.sh] -----"
echo $1
# それらをdataプロパティの中に格納したbundle.jsonを生成
jq -s add src/ejs/data/common/*.json src/ejs/data/module/*.json | \
  jq '{"data":.}' \
  > src/ejs/data/bundle.json

# Bug: watch時だけ以下を実行したい(npm start時にも不要に実行されてしまう)
if [ $1 = "buildByWatch" ] ; then
  echo "--- < buildByWatch > ---"
  npm run build:html
  browser-sync reload
fi
