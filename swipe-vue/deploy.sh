#!/usr/bin/env bash

SCRIPT_DIR_NAME=$(dirname "$0")

# Add index HTML and assets
git add $SCRIPT_DIR_NAME/../index.html
git add $SCRIPT_DIR_NAME/../assets

# Commit the changes
DATE=`cat version`
GIT_USER=`git config user.name`
git commit -m "deploying updates from ${USER} on ${DATE}"
git push
