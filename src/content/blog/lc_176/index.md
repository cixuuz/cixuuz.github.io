---
title: "176. Second Highest Salary"
description: "176. Second Highest Salary"
date: "2017-06-25"
draft: true
---

[176. Second Highest Salary](https://leetcode.com/problems/second-highest-salary/)

# Solution

select
(select salary
from employee
group by salary
order by salary desc
limit 1 offset 1)
as SecondHighestSalary;

# Summary

There is a trick to print null when result is empty.
