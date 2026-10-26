---
title: "leetcode summary 08/27"
description: "same with 51"
date: "2017-08-27"
draft: true
---

# 51. N-Queens

- dfs: each recursion check with previous rows
- quick check: using a boolean array to record if current location is conflicts with elements in col, \ and /
- bit mask:
  - set i to 1: a |= (1 << i)
  - set i to 0: a &= ~(1 << i)
  - inverse i: a ^= (1 << i)
  - get i: (a >> i) & 1
  - find last 1: a & -a

# 52. N-Queens II

same with #51

# 98. Validate Binary Search Tree

- recursive: check left and right bound
- iterative: inorder traverse to see if ordered

# 106. Construct Binary Tree from Inorder and Postorder Traversal

# 113. Path Sum II

- remove added node before return
- when add a linkedlist to a list, must create a new copy

# 103. Binary Tree Zigzag Level Order Traversal

# 663. Equal Tree Partition

- The idea is to use a hash table to record all the different sums of each subtree in the tree. If the total sum of the tree is sum, we just need to check if the hash table constains sum/2.
- must check if the sum of the whole tree is even.
- one special case is when sum equals to zero
