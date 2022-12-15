#!/bin/sh
# https://github.com/AkhileshNS/heroku-deploy/issues/39
git config user.name "USERNAME"
git config user.email "EMAIL"
git add -f build
git commit -m "New compilation"
