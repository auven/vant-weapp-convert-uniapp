#!/usr/bin/env sh

if [ ! -d "./docs/dist" ];then
  mkdir ./docs/dist
else
  if [ -d "./docs/dist/h5" ];then
    rm -rf ./docs/dist/h5
  fi
fi

npm run build:h5

cp -r ./dist/build/h5 ./docs/dist

cd docs

rm -rf ./dist/*.js
rm -rf ./dist/*.html

npx cross-env NODE_ENV=production webpack --config build/webpack.doc.prd.js

npm run preview
