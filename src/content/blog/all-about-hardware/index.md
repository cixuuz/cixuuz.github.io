---
title: "SSD vs HDD的性能对比.讲解了为什么SSD的读写性能高于HDD"
description: "1. http://www.pcgamer.com/hard-drive-vs-ssd-performance/2/"
date: "2017-03-28"
---

# [SSD vs HDD的性能对比.讲解了为什么SSD的读写性能高于HDD.](http://oserror.com/backend/ssd-principle/)

- NAND一个重要的特性是，其只能是读或写单个page，但不能覆盖写如某个page，必须先要清空里面的内容，再写入。
- 由于清空内容的电压较高，必须是以block为单位。因此，没有空闲的page时，必须要找到没有有效内容的block，先擦写，然后再选择空闲的page写入。
- 主要问题：写放大
  - SSD读写是以page为单位的，如果更新page中的部分数据，也需要写整个page
  - SSD的garbage collection中，会在block间移动数据
  - SSD的wear leveing中，可能也会在block间交换数据，导致写放大
- 总结
  - 需要充分利用其随机读写快的特性
  - 尽可能在软件层面更新小块数据，减轻SSD写放大问题
  - 避免频繁的更新数据，减轻SSD写放大及寿命减少的问题，尽可能使用追加的方式写数据

# Reference

1. http://www.pcgamer.com/hard-drive-vs-ssd-performance/2/

---

- [← Previous Post](/2017-03-30-json/ "JSON是一种格式，基于文本，优于轻量，用于交换数据")
- [Next Post →](/2017-03-26-How-to-remote-connect-to-PostgreSQL/ "How to remote connect to PostgreSQL")

**Contents**

1. [1. SSD vs HDD的性能对比.讲解了为什么SSD的读写性能高于HDD.](#ssd-vs-hddx7684x6027x80fdx5bf9x6bd4x8bb2x89e3x4e86x4e3ax4ec0x4e48ssdx7684x8bfbx5199x6027x80fdx9ad8x4e8ehdd)
2. [2. Reference](#reference)

##### [FEATURED TAGS](/tags/)

[hardware](/tags/#hardware "hardware")

---

##### FRIENDS

- [Youlun](http://zhyoulun.com/)
