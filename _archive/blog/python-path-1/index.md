---
title: "Python从小白到大白-Python也可以是函数式语言"
description: "按, 作为一个Python初学者, Python的格式化语法让众多编程小白追捧, 它的语法糖让代码变得简洁易读, 它的庞大开源库让它在各个领域都能发挥作用. 但我时常感受到这个门槛极低的语言远没有表面上看起来易懂易用. 在Python的学习之路上, 我也时常迷茫于自己是否真正掌握了这门语言.…"
date: "2016-07-31"
lang: "zh"
---

# 引言

按, 作为一个Python初学者, Python的格式化语法让众多编程小白追捧, 它的语法糖让代码变得简洁易读, 它的庞大开源库让它在各个领域都能发挥作用. 但我时常感受到这个门槛极低的语言远没有表面上看起来易懂易用. 在Python的学习之路上, 我也时常迷茫于自己是否真正掌握了这门语言. Stackoverflow上有一篇帖子很好地说明了Python的进阶之路, 于是我准备顺着这个思路写写各个要点.

注: 本文主要参照Python 3.5官方文档

根据这篇帖子, Python进阶之路: 从小白到大白.

1. Discover list comprehensions
2. Discover generators
   [generator漫谈](http://nychent.github.io/about-generator.cn/) [更多方法](http://nychent.github.io/about-generator-2.cn/) [优劣点(未完成)]()
3. Incorporate [map, reduce, filter, iter, range, xrange (在Python 3中已与range合并)](https://docs.python.org/3/library/functions.html) often into your code
   [本文](http://nychent.github.io/2016/07/31/python-path-1.cn.html)
4. Discover Decorators
5. Write recursive functions, a lot
6. Discover itertools and functools
7. Read Real World Haskell (read free online)
8. Rewrite all your old Python code with tons of higher order functions, recursion, and whatnot.
9. Annoy your cubicle mates every time they present you with a Python class. Claim it could be “better” implemented as a dictionary plus some functions. Embrace functional programming.
10. Rediscover the Strategy pattern and then all those things from imperative code you tried so hard to forget after Haskell.
11. Find a balance.

# 正文

## Lambda

提到 map, reduce, filter, 首先需要了解的概念是lambda function. 这个概念源于如今火热的以Scala为代表的函数式编程(Functional Programming Languages). 那么lambda function与普通的function有什么区别呢? 我们来看一个例子:

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` >>> # function >>> def f(x, y): ...     return x + y ... >>> f(1, 2) 3 >>> # lambda expression >>> L = lambda x, y: x + y >>> print(L(1, 2)) 3 ``` |

按照[python document](https://docs.python.org/3/tutorial/controlflow.html?highlight=lambda#lambda-expressions), lambda是anonymous functions, 也就是说它没有函数名. 因此, 在文档中, 它也被称作是 expression, 而非函数. 另一个区别在于它的return 就是表达式本身, 在这个例子里是 x+y.

lambda的一般形式是:

|  |  |
| --- | --- |
| ``` 1 ``` | ``` lambda argument_list : expression using arguments ``` |

lambda 也有两个特性:  
1. lambda 是 expression 而非 statement.
因此, lambda可以在任何地方使用, 如它可以作为 argument 的一部分:

|  |  |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` >>> pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')] >>> pairs.sort(key=lambda pair: pair[1]) >>> pairs [(4, 'four'), (1, 'one'), (3, 'three'), (2, 'two')] ``` |

1. lambda 主体部分是 expression.

lambda的expression和function中的return部分很像, 紧凑, 简洁. 但代价是无法写出更加通用的程序. 因此从语义的角度上说, lambda 仅仅是一种语法糖.

## map filter reduce

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` >>> foo = [2, 18, 9, 22, 17, 24, 8, 12, 27] >>> # map >>> list(map(lambda x: x * 2, foo)) [4, 36, 18, 44, 34, 48, 16, 24, 54] >>> # filter >>> list(filter(lambda x: x % 2 == 0, foo)) [2, 18, 22, 24, 8, 12] >>> # reduce >>> import functools >>> functools.reduce(lambda x, y: x + y,foo) 139 ``` |

以上, 我们可以看出map, filter, reduce 都有两个arguments: function和list. 它们的形式如下:

|  |  |
| --- | --- |
| ``` 1 2 3 ``` | ``` map(func, seq) filter(func, seq) reduce(func, seq) ``` |

这里的func，可以是lambda 也可以是function. 需要注意的是在Python 3 中, map和filter都是iterator, 因此, 我们需要list()将结果生成出来; 而reduce在Python3中被放到了[functools](https://docs.python.org/3/library/functools.html#module-functools)包中.

具体来说, map是将func应用到seq中的各个元素. 例子里, 对于list中的元素, 每个元素乘以2. 当然, 多个lists也是没有问题的.

|  |  |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` >>> foo = [1, 2, 3] >>> bar = [3, 2, 1] >>> list(map(lambda x, y: x + y, foo, bar)) [4, 4, 4] ``` |

filter同样是将func应用到各元素, 并返回结果为`True`的元素. 通过filter可以很方便的取出一部分元素.

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` >>> foo = [2, 18, 9, 22, 17, 24, 8, 12, 27] >>> list(filter(lambda x: x % 2, foo)) # find odds [9, 17, 27] >>> list(filter(lambda x: x % 2 == 0, foo)) # find evens [2, 18, 22, 24, 8, 12] ``` |

reduce 比较特殊, 它不断的将list中前两个元素拿出来当作程序的变量,最终返回一个值. 如图所示:
![Imgur](http://i.imgur.com/WQK1AEu.png)
Source: <http://www.python-course.eu/python3_lambda.php>
由上图, 很自然的, 我们可以直接计算阶乘

|  |  |
| --- | --- |
| ``` 1 2 ``` | ``` >>> functools.reduce(lambda x, y: x * y, range(1, 11)) 3628800 ``` |

# 总结

map, filter和reduce的作用在于将lambda或者function变成高阶(high-order) 函数. 虽然Python之父Guido van Rossum在[“All Things Pythonic: The fate of reduce() in Python 3000”](http://www.artima.com/weblogs/viewpost.jsp?thread=98196)中曾说, 他放弃lambda, map(), filter() and reduce()的原因, 并希望远离Lisp(最早的函数式语言). 他的理由包括 :

1. 有很多其他的替代方案, 比如本系列第一部分 list comprehension

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` >>> Celsius = [39.2, 36.5, 37.3, 37.8] >>> # map >>> list(map(lambda x: (float(9)/5)*x + 32, Celsius)) [102.56, 97.7, 99.14, 100.03999999999999] >>> # list comprehension >>> [ ((float(9)/5)*x + 32) for x in Celsius ] [102.56, 97.7, 99.14, 100.03999999999999] ``` |

1. List comprehension 更明确, 易于理解, 如上例
2. list comprehension和 “filter, map, reduce and lambda” 都可能违背了Python的宗旨 “There should be one obvious way to solve a problem” according to [The Zen of Python](https://www.python.org/dev/peps/pep-0020/)

Anyway, 以上这些functions都会节省我们的代码量, 可谓是码农的福音. 毕竟人生苦短, 我用Python.

# Reference

1. <http://www.secnetix.de/olli/Python/lambda_functions.hawk>
2. <http://www.python-course.eu/python3_lambda.php>
3. <https://docs.python.org/3/howto/functional.html?highlight=lambda>
