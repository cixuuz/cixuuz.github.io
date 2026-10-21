---
title: "177. Nth Highest Salary"
description: "177. Nth Highest Salary"
date: "2017-06-25"
---

[177. Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary)

# Solution

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
declare m int;
set m = N - 1;
RETURN (
# Write your MySQL query statement below.
select distinct salary
from Employee
order by salary desc
limit 1
offset m
);
END

# Summary

The LIMIT clause can be used to constrain the number of rows returned by the SELECT statement. LIMIT takes one or two numeric arguments, which must both be nonnegative integer constants (except when using prepared statements).
