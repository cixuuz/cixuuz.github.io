---
title: "leetcode summary 08/23"
description: "(no summary)"
date: "2017-08-23"
---

# 337. House Robber III

- basic: for each node, you can choose rob or not, based on the parent’s status. return max amount of each choice.
- dp: keep previous rob information.

# 95. Unique Binary Search Trees II

- foreach 1 to n, generate left and right subtree and combine with current node.

# 111. Minimum Depth of Binary Tree

- its root to leaf, not to other node. For example (1, 2), the only path is 1->2.
