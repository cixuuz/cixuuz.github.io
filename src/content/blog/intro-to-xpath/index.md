---
title: "Intro to xpath"
description: "发现一个很好的xpath入门教程"
date: "2017-04-13"
---

发现一个很好的[xpath入门教程](http://plasmasturm.org/log/xpath101/)

# xpath有三种记号，分别是 /, [] 和 ::

## /

/foo/bar 指的是从根结点开始，/foo 对于每个节点，也就是根结点，得到它的子节点（只有一个）。把节点为foo的都放在一起。
接着/bar 对于每个节点, 得到bar的子节点的集合。这种记号叫做steps.

## []

/foo[bar] 是从根结点开始，/foo 同上。然后 [bar] 对于每个节点得到为bar的子节点集合。[]里的条件叫做 predicate.

## ::

axes 也就是 :: 表示查询条件之前选择那些节点。
/foo/following-sibling::bar 前面相同，接着/following-sibling::bar 对于每个节点，得到它的兄弟节点，查看他们是否为bar。
因此 /foo/bar 和 /foo[bar] 实际上是 /child::foo/child::bar 和 /child::foo[child::bar]。

其他的用法都是一些语法糖，如attribute::foo 可以写成 @foo, /descendant-or-self::foo 可以是 //foo

# 其他有用的链接

1. 官方文档 <https://www.w3.org/TR/xpath/>
2. <http://zvon.org/comp/r/tut-XPath_1.html#intro>
