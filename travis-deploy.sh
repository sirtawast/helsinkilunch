#!/bin/sh
set -e

if [[ "$TRAVIS_BRANCH" != master ]]; then
  echo "Not building on 'master' so not deploying"
  exit 0
fi

eval `ssh-agent -s`
ssh-add /tmp/deploy_key

git config user.name "Travis CI"
git config user.email "spook@example.com"

REPOSITORY=`git config remote.origin.url`
GITHUB_LINK=${REPOSITORY/https:\/\/github.com\//git@github.com:}
COMMIT_SHA=`git rev-parse --verify HEAD`

git checkout gh-pages
git stash
mv /tmp/crawled/ crawled/

git add .
git commit -m "[Travis] Update crawled files"
git push $GITHUB_LINK gh-pages