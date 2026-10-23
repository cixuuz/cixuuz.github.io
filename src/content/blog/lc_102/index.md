---
title: "leetcode 102"
description: "Pure math. Median definition is the median is used for dividing a set into two equal length subsets, that one subset is always greater than the other."
date: "2017-08-08"
draft: true
---

# 4. Median of Two Sorted Arrays

Pure math. Median definition is the median is used for dividing a set into two equal length subsets, that one subset is always greater than the other.

# 102. Binary Tree Level Order Traversal

- The best way to to iterate tree level by level is to use for loop in Java. (BFS)
- return null is not same as return; (empty)

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 ``` | ``` public class Solution {     public List<List<Integer>> levelOrder(TreeNode root) {         List<List<Integer>> res = new LinkedList<List<Integer>>();         Queue<TreeNode> q = new LinkedList<TreeNode>();                  if (root == null) return res;                  q.offer(root);         while (!q.isEmpty()) {             Integer levelLength = q.size();             List<Integer> list = new LinkedList<Integer>();                          for (int i = 0; i < levelLength; i++) {                 TreeNode node = q.poll();                 list.add(node.val);                 if (node.left != null) q.offer(node.left);                 if (node.right != null) q.offer(node.right);             }             res.add(list);         }                  return res;     } } // recursive public class Solution1 {     List<List<Integer>> res = new ArrayList<List<Integer>>();              public List<List<Integer>> levelOrder(TreeNode root) {         helper(root, 0);         return res;     }          private void helper(TreeNode root, Integer depth) {         if (root == null) return;         if (res.size() == depth) res.add(new LinkedList<Integer>());                  res.get(depth).add(root.val);         helper(root.left, depth+1);         helper(root.right, depth+1);     } } ``` |
