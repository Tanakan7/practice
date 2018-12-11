echo "----- [build_html.sh] -----"
echo input: $1

# パスを消してファイル名のみ取得
INPUT_FILE=$(basename $1)

ejs-cli \
  --base-dir src/ejs/html/ ${INPUT_FILE} \
  --out dist/ \
  --options src/ejs/data/bundle.json

# 拡張子置換
OUTPUT_FILE=${INPUT_FILE/.ejs/.html}

js-beautify \
  --replace "dist/${OUTPUT_FILE}" \
  --indent-size 2
