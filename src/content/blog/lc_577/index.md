---
title: "lc_577"
description: "select e.name, b.bonus"
date: "2017-07-30"
draft: true
---

#### 

##### January 1, 0001

  

select e.name, b.bonus
from employee e left join bonus b
on e.empid = b.empid
where b.bonus < 1000
