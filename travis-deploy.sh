#!/bin/sh

if [[ "$TRAVIS_BRANCH" != master ]]; then
  echo "Not building on 'master' so not deploying"
  exit 0
fi

git checkout gh-pages;
git stash;
mv /tmp/crawled/ crawled/;

git add .;
git commit -m "[Travis] Update crawled files";
git push;