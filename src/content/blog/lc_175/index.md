---
title: "175. Combine Two Tables"
description: "175. Combine Two Tables"
date: "2017-06-25"
---

[175. Combine Two Tables](https://leetcode.com/problems/combine-two-tables/)

# Solution

select FirstName, LastName, City, State
from person left join address
on person.personid = address.personid;

# Summary
