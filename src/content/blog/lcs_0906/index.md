---
title: "leetcode summary 09/06"
description: "(no summary)"
date: "2017-09-06"
draft: true
---

# 517 [Super Washing Machines](https://leetcode.com/problems/super-washing-machines/discuss/)

- the least steps we need to eventually finish this process is determined by the peak of abs(cnt) (accumulative count of gain/lose array) and the max of “gain/lose” array.
  >For a single machine, necessary operations is to transfer dresses from one side to another until sum of both sides and itself reaches the average number. We can calculate (required dresses) - (contained dresses) of each side as L and R:

> L > 0 && R > 0: both sides lacks dresses, and we can only export one dress from current machines at a time, so result is abs(L) + abs®
> L < 0 && R < 0: both sides contains too many dresses, and we can import dresses from both sides at the same time, so result is max(abs(L), abs®)
> L < 0 && R > 0 or L >0 && R < 0: the side with a larger absolute value will import/export its extra dresses from/to current machine or other side, so result is max(abs(L), abs®)

# 529 [Minesweepe](https://leetcode.com/problems/minesweeper/description/)

- think carefully B and E

# 564. [Find the Closest Palindrome](https://leetcode.com/problems/find-the-closest-palindrome/description/)

# 647. Palindromic Substrings

- memo valid substring from i to j
