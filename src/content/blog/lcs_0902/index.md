---
title: "leetcode summary 09/02 (10)"
description: "[37,-34,-48,null,-100,-100,48,null,null,null,null,-54,null,-71,-22,null,null,null,8]"
date: "2017-09-02"
---

# 617. Merge Two Binary Trees

- dfs

# 606. Construct String from Binary Tree

- right can be omitted in some case

# 553. Optimal Division

- math: x1 must be numerator and x2 must go to denominator.

# 545. Boundary of Binary Tree

- wrong answer:
  [37,-34,-48,null,-100,-100,48,null,null,null,null,-54,null,-71,-22,null,null,null,8]
  [1]
  [0, null, 0, 0]
- neat solution of one traversal:
  1. node.left is left bound if node is left bound;
  2. node.right could also be left bound if node is left bound && node has no right child;
  3. Same applys for right bound;
  4. if node is left bound, add it before 2 child - pre order;
  5. if node is right bound, add it after 2 child - post order;
  6. A leaf node that is neither left or right bound belongs to the bottom line;

# 538. Convert BST to Greater Tree

- dfs: need to pass mutable int array
- iterative: stack

# 537. Complex Number Multiplication

- parseInt and split and stream

# 536. Construct Binary Tree from String

- split into three part

# 534. Design TinyURL and 535. Encode and Decode TinyURL

1. How many unique identifiers possible? Will you run out of unique URLs?
2. Should the identifier be increment or not? Which is easier to design? Pros and cons?
3. Mapping an identifier to an URL and its reversal - Does this problem ring a bell to you?
4. How do you store the URLs? Does a simple flat file database work?
5. What is the bottleneck of the system? Is it read-heavy or write-heavy?
6. Estimate the maximum number of URLs a single machine can store.
7. Estimate the maximum number of queries per second (QPS) for decoding a shortened URL in a single machine.
8. How would you scale the service? For example, a viral link which is shared in social media could result in a peak QPS at a moment’s notice.
9. How could you handle redundancy? i,e, if a server is down, how could you ensure the service is still operational?
10. Keep URLs forever or prune, pros/cons? How we do pruning?
11. What API would you provide to a third-party developer?
12. If you can enable caching, what would you cache and what’s the expiry time?

## reference

1. <https://segmentfault.com/a/1190000006140476>

# 156. Binary Tree Upside Down

# 255. Verify Preorder Sequence in Binary Search Tree

- example, [4,2,3,1] cannot be bst.

# 671. Second Minimum Node In a Binary Tree

# 669. Trim a Binary Search Tree

# 670. Maximum Swap
