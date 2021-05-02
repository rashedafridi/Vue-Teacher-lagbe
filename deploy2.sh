#!/usr/bin/env sh

# abort on errors
set -e

# build
# echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd dist
# create a copy of index.html
cp index.html 404.html
# find . -name ".DS_Store" -delete

# if you are deploying to a custom domain
# echo 'custom.com' > CNAME

# remove git and reinitialise
rm -rf .git
# echo Deploying..
git init
git add -A
git commit -m 'deploy-4'

# deploy

git push -f git@github.com:rashedafridi/vue-teacher-lagbe.git main:gh-pages
rm -rf dist
cd -