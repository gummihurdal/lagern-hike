#!/usr/bin/env bash
# Usage: GH_TOKEN=ghp_xxx ./deploy.sh [repo-name]
set -euo pipefail
REPO="${1:-lagern-hike}"
USER="gummihurdal"
: "${GH_TOKEN:?set GH_TOKEN to a fresh token with 'repo' scope}"

# create the repo if it doesn't exist yet
curl -sf -X POST https://api.github.com/user/repos \
  -H "Authorization: Bearer $GH_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -d "{\"name\":\"$REPO\",\"description\":\"Lagern ridge traverse, 25 July 2026\",\"private\":false}" \
  >/dev/null || echo "repo may already exist, continuing"

git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "https://x-access-token:${GH_TOKEN}@github.com/${USER}/${REPO}.git"
git push -u origin main --force

# turn on Pages from the main branch root
curl -sf -X POST "https://api.github.com/repos/${USER}/${REPO}/pages" \
  -H "Authorization: Bearer $GH_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -d '{"source":{"branch":"main","path":"/"}}' >/dev/null \
  || curl -sf -X PUT "https://api.github.com/repos/${USER}/${REPO}/pages" \
       -H "Authorization: Bearer $GH_TOKEN" \
       -H "Accept: application/vnd.github+json" \
       -d '{"source":{"branch":"main","path":"/"}}' >/dev/null || true

git remote set-url origin "https://github.com/${USER}/${REPO}.git"   # drop token from config
echo "pushed. Pages will build at https://${USER}.github.io/${REPO}/"
