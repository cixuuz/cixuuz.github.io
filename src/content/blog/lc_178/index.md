---
title: "178. Rank Scores"
description: "178. Rank Scores"
date: "2017-06-25"
draft: true
---

[178. Rank Scores](https://leetcode.com/problems/rank-scores/#/description)

# Solution 1

SELECT
Score,
@rank := @rank + (@prev <> (@prev := Score)) Rank
FROM
Scores,
(SELECT @rank := 0, @prev := -1) init
ORDER BY Score desc

# solution 2

SELECT
Score,
(SELECT COUNT(DISTINCT Score) FROM Scores as s1 WHERE s1.Score >= s2.Score) As rank
FROM
Scores as s2
ORDER BY rank;

一直不知道还能这么嵌套写法

# Summary
