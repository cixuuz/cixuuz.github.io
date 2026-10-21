---
title: "How to remote connect to PostgreSQL"
description: "默认情况下，PostgreSQL 是配制成绑定 “localhost”."
date: "2017-03-26"
---

# 如何远程连接Postgresql

默认情况下，PostgreSQL 是配制成绑定 “localhost”.

上图可以看出端口5432是绑定在 127.0.0.1. 这说明任何外部连接postgresql server的请求都会被拒绝. 这一点我们可以通过telnet来确认：

# 修改psql配置文件

解决连接问题，我们需要修改配置文件。一个通用的方法是在数据库里查看 [参考链接](http://stackoverflow.com/questions/3602450/where-are-my-postgres-conf-files)

Open it and change it。

查询psql状态使用 

|  |  |
| --- | --- |
| ```  1 ``` | ```  /etc/init.d/postgresql status ``` |

启动，停止，重启psql 

|  |  |
| --- | --- |
| ```  1 ``` | ```  sudo service postgresql start/stop/restart ``` |

重启psql之后，用netstat查看连接。我们可以看到port 5432的本地地址已经变成了0.0.0.0.

让我们试着连接一下数据库

为了得到pg\_hba.conf

加上host文件

- 第二行是ipv6
- md5 表示连接需要输入密码。如果是trust，那么就是不需要密码。

最后重启psql

现在我们就可以远程连接psql。

另外，实际使用中可以用iptables再加一个安全层。

# Reference

1. [Configure PostgreSQL to allow remote connection](https://bosnadev.com/2015/12/15/allow-remote-connections-postgresql-database-server/)
2. [How to Allow Remote Connection to PostgreSQL Database using psql](http://www.thegeekstuff.com/2014/02/enable-remote-postgresql-connection/)

---

- [← Previous Post](/2017-03-28-All-about-hardware/ "SSD vs HDD的性能对比.讲解了为什么SSD的读写性能高于HDD")
- [Next Post →](/2017-03-21-how-to-set-up-admin-and-user-account-on-mongodb/ "how to set up admin and user account on mongodb")

**Contents**

1. [1. 如何远程连接Postgresql](#x5982x4f55x8fdcx7a0bx8fdex63a5postgresql)
2. [2. 修改psql配置文件](#x4feex6539psqlx914dx7f6ex6587x4ef6)
3. [3. Reference](#reference)

##### [FEATURED TAGS](/tags/)

---

##### FRIENDS

- [Youlun](http://zhyoulun.com/)
