#!/bin/sh
echo "----- [build_js.sh] -----"

webpack --config webpack.config.js --mode development
