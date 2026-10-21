#!/usr/bin/env bash
# One-click deploy for cixuuz.github.io (Astro Nano).
# Builds the site and pushes dist/ to master (GitHub Pages serves master).
# Source code lives on the `source` branch; run this from the site/ dir.
set -e
cd "$(dirname "$0")"
TOKEN=$(sed -E 's#https://[^:]+:([^@]+)@.*#\1#' ~/.git-credentials | head -1)
REMOTE="https://cixuuz:${TOKEN}@github.com/cixuuz/cixuuz.github.io.git"

echo "==> Building..."
npm run build
touch dist/.nojekyll

echo "==> Deploying dist/ to master..."
cd dist
rm -rf .git
git init -q
git config user.name "cixuuz"
git config user.email "26782336+cixuuz@users.noreply.github.com"
git config commit.gpgsign false
git remote add origin "$REMOTE"
git add -A
git commit -q -m "Deploy: $(date -u +%Y-%m-%dT%H:%MZ)"
git branch -M master
git push origin master --force
echo "==> Done. Live in ~1-2 min: https://cixuuz.github.io/"
