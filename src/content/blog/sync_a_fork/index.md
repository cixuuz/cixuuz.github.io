---
title: "Sync_a_fork"
description: "Its useful to sync a fork when contributing to open source project."
date: "2019-03-17"
draft: true
---

Its useful to sync a fork when contributing to open source project.

Here is some tips:
1. make sure current folder is repo root.
2. add upstream link. Here, upstream could be any name
`git remote add upstream https://github.com/whoever/whatever.git`
3. fetch content.
```git fetch upstream`
4. goto your branch and merge (keep local changes) or rebase (do not keep) upstream branch.

Reference:
1. <https://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository>
2. <https://help.github.com/en/articles/syncing-a-fork>
