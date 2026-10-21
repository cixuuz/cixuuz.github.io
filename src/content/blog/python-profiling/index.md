---
title: "python profiling and optimize"
description: "commandline profiling"
date: "2017-03-30"
---

# [profiling python](https://toucantoco.com/back/2017/01/16/python-performance-optimization.html)

commandline profiling

|  |  |
| --- | --- |
| ```  1 ``` | ```  python -m cProfile -s tottime your_program.py ``` |

# 优化

- np random 比原生函数快四倍
- 需要记住的延迟数据 

  |  |  |
  | --- | --- |
  | ```  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15 ``` | ```  Latency Comparison Numbers  L1 cache reference                           0.5 ns  Branch mispredict                            5   ns  L2 cache reference                           7   ns                      14x L1 cache  Mutex lock/unlock                           25   ns  Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache  Compress 1K bytes with Zippy             3,000   ns        3 us  Send 1K bytes over 1 Gbps network       10,000   ns       10 us  Read 4K randomly from SSD*             150,000   ns      150 us          ~1GB/sec SSD  Read 1 MB sequentially from memory     250,000   ns      250 us  Round trip within same datacenter      500,000   ns      500 us  Read 1 MB sequentially from SSD*     1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory  Disk seek                           10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip  Read 1 MB sequentially from disk    20,000,000   ns   20,000 us   20 ms  80x memory, 20X SSD  Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms ``` |

# Refernce

1. https://docs.python.org/3/library/profile.html

---

- [← Previous Post](/2017-03-31-python-tips/ "python tips")
- [Next Post →](/2017-03-30-json/ "JSON是一种格式，基于文本，优于轻量，用于交换数据")

**Contents**

1. [1. profiling python](#profiling-python)
2. [2. 优化](#x4f18x5316)
3. [3. Refernce](#refernce)

##### [FEATURED TAGS](/tags/)

[Python](/tags/#Python "Python")

---

##### FRIENDS

- [Youlun](http://zhyoulun.com/)
