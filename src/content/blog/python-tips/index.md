---
title: "python tips"
description: "https://zhuanlan.zhihu.com/p/26099601"
date: "2017-03-31"
draft: true
---

https://zhuanlan.zhihu.com/p/26099601

2).函数的传值到底是值传递还是引用传递，要分情况

a.不可变参数用值传递：

像整数和字符串这样的不可变对象，是通过拷贝进行传递的，因为你无论如何都不可能在原处改变不可变对象

b.可变参数是用引用传递的

比如像列表，字典这样的对象是通过引用传递，和C语言里面的用指针传递数组很相似，可变对象能在函数内部改变.

quick sorting ![](http://on30xvavr.bkt.clouddn.com/170331-1.png)

---

- [← Previous Post](/2017-04-05-remote-debug-using-pycharm-on-AWS-ec2/ "remote debug using pycharm on AWS ec2")
- [Next Post →](/2017-03-30-python-profiling/ "python profiling and optimize")

**Contents**

none

##### [FEATURED TAGS](/tags/)

[Python](/tags/#Python "Python")

---

##### FRIENDS

- [Youlun](http://zhyoulun.com/)
