---
title: "leetcode summary 08/22"
description: "(no summary)"
date: "2017-08-22"
---

# 114. Flatten Binary Tree to Linked List

- iterative: set left tree to the right child, left child is null, then go to next right node.
- recursive: use post order get successor of each node, set successor to each node’r right child

# 199. Binary Tree Right Side View

- iterative: BFS, always pop rightmost node. It’s better using queue, and loop N times. N is the size of queue.
- recursive: post order, and pop the first node with depth N

# 230. Kth Smallest Element in a BST

- recursive: in order traverse with a counter
- iterative: use stack, first push current node, move to left, next do sth, then move to right;

# 94. Binary Tree Inorder Traversal

- iterative: always left first, then right

# 144. Binary Tree Preorder Traversal

- iterative: always go down and up, so stack is best way to do

# 145. Binary Tree Postorder Traversal

- just reverse of preorder
