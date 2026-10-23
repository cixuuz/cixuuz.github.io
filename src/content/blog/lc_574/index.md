---
title: "lc_574"
description: "select c2.name"
date: "2017-07-30"
draft: true
---

#### 

##### January 1, 0001

  

select c2.name
from
(
select candidateid id
from vote
group by candidateid
order by count(candidateid)
limit 1
) c1 join candidate c2
on c1.id = c2.id;
