---
title: "leetcode summary 08/29"
description: "(no summary)"
date: "2017-08-29"
---

# 107. Binary Tree Level Order Traversal II

- use element as index to record whether visit

# 117. Populating Next Right Pointers in Each Node II

- child connected and be used for next level

# 646 Maximum Length of Pair Chain

- DP: pairs[i][0] > pairs[j][1]? dp[j] + 1 : dp[j]
- greedy: for end point z, if all intervals where end point < z, there is no possible to get a longer chain based on previous intervals.

# 661 Image Smoother

# 129. Sum Root to Leaf Numbers
