---
title: "leetcode summary 09/05"
description: "(no summary)"
date: "2017-09-05"
draft: true
---

# 516 Longest Palindromic Subsequence

- O(2^n) Brute force. If the two ends of a string are the same, then they must be included in the longest palindrome subsequence. Otherwise, both ends cannot be included in the longest palindrome subsequence.
- O(n^2) memo the result from left to right. also rewrite in dp fashion

# 508 Most Frequent Subtree Sum

- postOrder and check count
