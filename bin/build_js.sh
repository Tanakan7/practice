#!/bin/sh
echo "----- [build_js.sh] -----"

webpack --config conf/webpack.config.js --mode development & \
webpack --config conf/webpack.config.ts.js --mode development
