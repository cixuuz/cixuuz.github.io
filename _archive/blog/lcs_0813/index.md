---
title: "lcs 08/13"
description: "(no summary)"
date: "2017-08-13"
draft: true
---

# 99. Recover Binary Search Tree

- travese in order. The result should be sorted ascending. The misplaced larger element will be close to head, while the smaller one will be close to end. For example, 1 2 3 is the in order. But the wrong seq is like 3 2 1. Apparently, 3 > 2 so 3 is the first node. 2 > 1, so 1 is the second one.
- iterative solution using [morris traverse](http://www.cnblogs.com/AnnieKim/archive/2013/06/15/MorrisTraversal.html)

# 257. Binary Tree Paths

- string is immutable.
