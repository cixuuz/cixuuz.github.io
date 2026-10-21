---
title: "RAID基本原理"
description: "1. <https://en.wikipedia.org/wiki/Hammingcode"
date: "2017-05-07"
---

# [RAID基本原理](http://oserror.com/backend/raid-principle/)

| RAID级别 | 读性能 | 写性能 | 空间利用率 | 最大能容忍的坏盘数 |
| --- | --- | --- | --- | --- |
| RAID0 | 单块盘的N倍 | 单块盘的N倍 | 100% | 0 |
| RAID1 | 单块盘的N倍 | 最慢磁盘的性能 | 1/N | N-1 |
| RAID2 | 不到单块盘的N倍 | 单盘的写入速度 \* 校验盘的数量 | 不到100% | 取决于海明纠错码位数 |
| RAID3 | 单块盘的N-1倍 | 校验盘的写入速度 | (N-1)/N | 1 |
| RAID4 | 单块盘的N-1倍 | 校验盘的写入速度 | (N-1)/N | 1 |
| RAID5 | 单块盘的N倍 | 略微弱于单块盘的N倍 | (N-1)/N | 1 |
| RAID6 | 单块盘的N倍 | 略微弱于单块盘的N倍，差于RAID5 | (N-2)/N | 2 |

# Reference

1. <https://en.wikipedia.org/wiki/Hamming_code>
2. <https://en.wikipedia.org/wiki/RAID>
