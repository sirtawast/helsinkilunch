#!/bin/bash

if [ "$TRAVIS_BRANCH" != master ]; then
  echo "Not building on 'master' so not deploying"
  exit 0
fi

git config user.name "TravisCI"
git config user.email "spook@example.com"
git config --global push.default simple
git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'

REPOSITORY=`git config remote.origin.url`
GITHUB_LINK=${REPOSITORY/https:\/\/github.com\//git@github.com:}
COMMIT_SHA=`git rev-parse --verify HEAD`

git fetch origin
git reset --hard origin/master
git fetch --all
git checkout -b gh-pages --track origin/gh-pages

rsync -auvP /tmp/crawled/* crawled/ 
rsync -auvP /tmp/static/* ./

git add .
git commit -m "[Travis] Update crawled files (${COMMIT_SHA})"
git push $GITHUB_LINK gh-pages