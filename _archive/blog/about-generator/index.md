---
title: "Python从小白到大白-Generator 漫谈"
description: "按, 作为一个Python初学者, Python的格式化语法让众多编程小白追捧, 它的语法糖让代码变得简洁易读，它的庞大开源库让它在各个领域都能发挥作用. 但我时常感受到这个门槛极低的语言远没有表面上看起来易懂易用. 在Python的学习之路上, 我也时常迷茫于自己是否真正掌握了这门语言.…"
date: "2016-05-30"
lang: "zh"
---

按, 作为一个Python初学者, Python的格式化语法让众多编程小白追捧, 它的语法糖让代码变得简洁易读，它的庞大开源库让它在各个领域都能发挥作用. 但我时常感受到这个门槛极低的语言远没有表面上看起来易懂易用. 在Python的学习之路上, 我也时常迷茫于自己是否真正掌握了这门语言. Stackoverflow上有一篇帖子很好地说明了Python的进阶之路, 于是我准备顺着这个思路写写各个要点.

根据这篇帖子, [Python进阶之路: 从小白到大神](http://stackoverflow.com/questions/2573135/python-progression-path-from-apprentice-to-guru). 其中, 前两点分别是Discover [list comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions) 和 [Discover generators(生成器)](https://en.wikipedia.org/wiki/Python_syntax_and_semantics#Generators). 身为小白的我, 心里暗想generators是个啥。于是，研究了一番，遂成此文。

注: 全文使用Python3.5, 标准库.

谈起Generator, 与之相关的的[概念](http://nvie.com/posts/iterators-vs-generators/)有
- {list, set, tuple, dict} comprehension and container
- iterable
- iterator
- generator fuction and iterator
- generator expression

接下来, 我们分别来看看这些概念:

# {list, set, tuple, dict} comprehension and container

Container是存储元素的数据结构, 一般存储在内存中. 在Python中，常见的container包括但不限于:
- list, deque, …
- set, …
- tuple, namedtuple, …
- dict, defaultdict, Counter, …

简单举例:

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` assert 1 in [1, 2, 3]  # list assert 1 in {1, 2, 3}  # set assert 1 in (1, 2, 3)  # tuple d = {1: 'foo', 2: 'bar', 3: 'qux'} assert 1 in d  # dict ``` |

特别的, String也是container. 我们可以查询一个substring是否在string里, 如:

|  |  |
| --- | --- |
| ``` 1 2 3 ``` | ``` s = 'foobar' assert 'foo' in s assert 'x' not in s  # string 包含所有的 substrings. 需要注意的是string并不存储这些substrings, 只是可以如此查询 ``` |

# iterable

一般说来,大部分的containers是iterable.而iterable不限于containers,还包括像文件.

iterable是实现了`__iter__()`方法的对象.该方法返回的是的一个iterator对象.其中,iterator的目的是返回所有元素.来看例子:

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from collections import Iterable, Iterator x = [1, 2, 3] y = iter(x) z = iter(x) next(y) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` 1 ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` next(y) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` 2 ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` next(z) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` 1 ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` next(z) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` 2 ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` type(x) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` list ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` isinstance(x, Iterable) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` True ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` type(y) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` list_iterator ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` isinstance(y, Iterable) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` True ``` |

可以看出, x是list, 也是iterable. y和z都是x的返回值, 也就是iterators, 互相独立. iterators通过`___next___()`这个方法返回元素，每执行一次, 返回一个元素. 值得注意的是，y作为iterable的实例, 它也是iterator. iterable是一个比iterator更大的概念.

|  |  |
| --- | --- |
| ``` 1 2 3 ``` | ``` import dis x = [1, 2, 3] dis.dis('for _ in x: pass') ``` |

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ```   1           0 SETUP_LOOP              14 (to 17)               3 LOAD_NAME                0 (x)               6 GET_ITER         >>    7 FOR_ITER                 6 (to 16)              10 STORE_NAME               1 (_)              13 JUMP_ABSOLUTE            7         >>   16 POP_BLOCK         >>   17 LOAD_CONST               0 (None)              20 RETURN_VALUE ``` |

更深入的, 我们可以明显看出在for循环中, Python每次都是调用FOR\_ITER这个指令实现了读取下一个next()的功能, 也就是说, for循环中，首先利用GET\_ITER得到x的返回值, 一个iterator. 再通过FOR\_ITER得到其中的元素. 如此实现了循环的功能.

# iterator

那么什么是iterator? 就像之前我们提到的, iterator可以通过调用`__next___()`生成下一个值. 我们也可以说有`__next___()`这个方法的都可以是iterator. 这与它如何生成值无关. 我们具体看一个例子:

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from itertools import islice class seq:     def __init__(self):         self.gap = 2         self.curr = 1      def __iter__(self):         return self      def __next__(self):         value = self.curr         self.curr += self.gap         return value  f = seq() list(islice(f, 0, 10)) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] ``` |

以上, 我们构建了一个等差数列, 差为2. 其中, f既是iterable(因为iter方法), 也是iterator(因为有next方法).

对于iterator, next方法做的两件事是:
1. 更新iterator的状态，到下次调用;
2. 返回当前调用结果, eg: `return value`.

# generator function and iterator

Ok. 终于到了本文的正题 generator. 首先[下定义](https://docs.python.org/3/glossary.html#term-generator), generator是返回generator iterator的function(函数). 具体来说, 它可以让你更优雅的实现iterator, 而不用写带有`__iter__()` 和 `__next__()` 的类. 继续以上面那个等差数列为例, 我们看看generator如何的优雅的完成它:

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` def seq():     gap, curr = 2, 1     while True:         yield curr         curr = curr + gap  f = seq() list(islice(f, 0, 10)) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] ``` |

以上, 我们看到了让它如此优雅的原因 `yield`.

让我们看看这段code是如何运行的,

首先， seq是一个Python程序, 它返回的是iterator. 当 f = seq() 被调用, generator 会准备好返回. 但这时没有执行任何代码.

接下来, 这个generator实例在islice()中被使用. 仍然没有执行代码. 然后, list()开始建立list. 为了得到list的元素, list()开始调用islice()的next()方法抓取元素, 也就是要在 f 函数中取元素.

记住每次只生成一个元素. 这是代码开始运行到 gap, curr = 2, 1 初始化变量. 接着进入始终为真的循环, 到了yield语句. 它做两件事: 1.暂停, 并更新状态到下一次yield, 2. 返回当前结果, 也就是curr值, 1. 这个值接着被传到了islice(), 最后加到list中. list现在是 [1].

list()继续要下一个值. 暂停的 f 函数继续运行下一个语句curr + gap. curr 现在是2. 继续进入下一个while循环, 遇到 yield. 同样的, yield做两件事: 1.暂停下来调整状态; 2. 返回值2. 值返回到list, list 等于 [1, 2].

如此循环直到list取完10个元素. 特别的, 在第11次去值, islice()会有exception: StopIteration. 告诉list已经取值结束.

# generator expression

generator expression是Python的另一种generator. 相信大家都用过list expression, 比如生成一列数的平方:

|  |  |
| --- | --- |
| ``` 1 2 ``` | ``` numbers = [1, 2, 3, 4, 5, 6] [x ** 2 for x in numbers] ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` [1, 4, 9, 16, 25, 36] ``` |

generator expression很类似, 比如

|  |  |
| --- | --- |
| ``` 1 2 ``` | ``` squares_list = (x * x for x in numbers) squares_list ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` <generator object <genexpr> at 0x10435eaf0> ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` next(squares_list) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` 1 ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` list(squares_list) ``` |

|  |  |
| --- | --- |
| ``` 1 ``` | ``` [4, 9, 16, 25, 36] ``` |

以上, 不再累述.

# Summary

下图说明了各个概念之间的关系,
![关系图](http://i.imgur.com/S71qxcw.png)
注: 图片部分引用自 <http://nvie.com/posts/iterators-vs-generators/>

最后，谈谈为什么要使用generators. 它能帮你实现更优雅的代码, 减少中间变量和不必要的数据结构，从而代码量, 节省内存空间和运算性能.

针对一个循环代码,

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` def something():     result = []     for ... in ...:         result.append(x)     return result ``` |

你可以做这样的转换

|  |  |
| --- | --- |
| ``` 1 2 3 ``` | ``` def iter_something():     for ... in ...:         yield x ``` |

感谢阅读，欢迎大家修改指正.

|  |  |
| --- | --- |
|  |  |
