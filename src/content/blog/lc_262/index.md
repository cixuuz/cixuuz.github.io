---
title: "lc_262"
description: "select t2.day, round(ifnull(t1.c, 0) / t2.c, 2) as ‘cancellation rate’"
date: "2017-07-30"
---

#### 

##### January 1, 0001

  

select t2.day, round(ifnull(t1.c, 0) / t2.c, 2) as ‘cancellation rate’
from
(select request\_at as day, count(status) as c
from trips join (
select \*
from users
where not (banned = ‘Yes’ and role = ‘client’)
) as u
on trips.client\_id = u.users\_id
where request\_at >= ‘2013-10-01’ and
request\_at <= ‘2013-10-03’
group by request\_at) t2
left join
(select request\_at as day, count(status) as c
from trips join (
select \*
from users
where not (banned = ‘Yes’ and role = ‘client’)
) as u
on trips.client\_id = u.users\_id
where request\_at >= ‘2013-10-01’ and
request\_at <= ‘2013-10-03’ and
status != ‘completed’
group by request\_at) t1
on t1.day = t2.day
