---
title: "lc_580"
description: "select d.dept\\name, count(s.student\\id) as student\\number"
date: "2017-07-30"
draft: true
---

#### 

##### January 1, 0001

  

select d.dept\_name, count(s.student\_id) as student\_number
from department d left join student s
on d.dept\_id = s.dept\_id
group by d.dept\_name
order by count(s.student\_id), d.dept\_name
