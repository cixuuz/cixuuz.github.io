---
title: "lcs 08/12"
description: "(no summary)"
date: "2017-08-12"
---

# 297. Serialize and Deserialize Binary Tree

- deque inherits from linkedlist(collection).
- represent separator and null as a String.
- string and char are not same.
- append complete subtree ex “1,null,null,”

# 105. Construct Binary Tree from Preorder and Inorder Traversal

- recursive solution is straightforward. The only thing is that jump idx to find right start in inorder array. To speed up, we can cache inorder and index in the front.
- iterative not understand
