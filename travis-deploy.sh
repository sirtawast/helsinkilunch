#!/bin/sh

if [[ "$TRAVIS_BRANCH" != master ]]; then
  echo "Not building on 'master' so not deploying"
  exit 0
fi

git config user.name "Travis CI"
git config user.email "spook@example.com"
git config --global push.default simple

REPOSITORY=`git config remote.origin.url`
GITHUB_LINK=${REPOSITORY/https:\/\/github.com\//git@github.com:}
COMMIT_SHA=`git rev-parse --verify HEAD`

git stash
git checkout gh-pages
git stash

rm -Rf crawled/
mv /tmp/crawled/ crawled/

git add .
git commit -m "[Travis] Update crawled files (${COMMIT_SHA})"
git push $GITHUB_LINK gh-pages