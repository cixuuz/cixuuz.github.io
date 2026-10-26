---
title: "MySQL 架构"
description: "MySQL高可用方面，目前业界主流依然是基于异步复制的技术，例如Keepalived、MHA、ZooKeeper等，要求数据强一致的场景逐步开始使用分布式协议，这方面的典型代表有PXC、Group Replication、TiDB。下面我们就重点来说说keepalived、MHA和PXC这几种大家用得比较多的架构。"
date: "2017-08-20"
---

[refer](https://mp.weixin.qq.com/s/0frrH09-zFjdFYZalatb8A)

# 高可用架构

MySQL高可用方面，目前业界主流依然是基于异步复制的技术，例如Keepalived、MHA、ZooKeeper等，要求数据强一致的场景逐步开始使用分布式协议，这方面的典型代表有PXC、Group Replication、TiDB。下面我们就重点来说说keepalived、MHA和PXC这几种大家用得比较多的架构。

- 脑裂 （ 一种常见的脑裂情况可以描述如下）比如正常情况下，（集群中的）NodeA 和 NodeB 会通过心跳检测以确认对方存在，在通过心跳检测确认不到对方存在时，就接管对应的（共享） resource 。如果突然间，NodeA 和 NodeB 之间的心跳不存在了（如网络断开），而 NodeA 和 NodeB 事实上却都处于 Active 状态，此时 NodeA 要接管 NodeB 的 resource ，同时 NodeB 要接管 NodeA 的 resource ，这时就是脑裂（split-brain）。

1. 双Master架构：非常成熟，使用很普遍，要注意延迟和数据的一致性。
2. PXC: 分布式协议，数据强一致性，并发效率略低，可用性好
3. MHA：各项指标介于M-M和PXC之间，性能无损失，适合读写分离架构。

# MySQL sharding拆分

分库(垂直),　分表(水平)的取舍
