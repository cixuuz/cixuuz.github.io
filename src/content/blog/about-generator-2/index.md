---
title: "Python从小白到大白-Generator 漫谈 (续1)"
description: "按, 上篇介绍了generator相关的概念. 这篇来探究一下generator相关的操作方法. 以下都是使用Python 2.7.10."
date: "2016-06-18"
lang: "zh"
---

按, [上篇](http://nychent.github.io/about-generator.cn/)介绍了generator相关的概念. 这篇来探究一下generator相关的操作方法. 以下都是使用Python 2.7.10.

根据[官方文档](https://docs.python.org/3/glossary.html#term-generator) generator 通过 yield 来实现 `next()` 方法.
> A function which returns a generator iterator. It looks like a normal
> function except that it contains yield expressions for producing a
> series of values usable in a for-loop or that can be retrieved one at
> a time with the next() function.

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` >>> def fib(): ...     a, b = 0, 1 ...     while True: ...             yield b ...             a, b = b, a + b ... >>> fib <function fib at 0x10d930c80> >>> f = fib() >>> f <generator object fib at 0x10d92faa0> >>> next(f) 1 >>> next(f) 1 >>> next(f) 2 >>> next(f) 3 >>> next(f) 5 ``` |

以上, 我们可以看到yield用法. 每次执行到yield, 都会记住执行状态的局部变量以及表达式。再下次恢复时, 即next(), 它会从记住的状态继续执行.

generator的另一种调用方法是通过send(value)来实现的。我们来看一个例子:

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` >>> def gen(): ...     while True: ...             value = yield ...             print(value) ... >>> g = gen() >>> g.send("ek") Traceback (most recent call last):   File "<stdin>", line 1, in <module> TypeError: can't send non-None value to a just-started generator ``` |

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` >>> next(g) >>> g.send("ek") ek >>> next(g) None ``` |

以上, 展示了如何讲value传入yield当前表达式. 具体来说, 使用send(value)时, generator停在yield的语句. 传入的值被复制到value, 然后print函数打印value, 经过循环遇到yield时, 暂停. 需要注意的是在没有执行next()前, generator状态并没有停在yield状态，也就无法传入值.

|  |  |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` >>> g = gen() >>> g.send(None) >>> g.send("ek") ek ``` |

以上, 除了next(), 可以让generator到达yield, send(None)作用是一样的.

让我们乘热打铁, 看一个稍微复杂的例子:

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` >>> def gen(value = None): ...     while True: ...             value = (yield value) ...             print("The value is", value) ...             if value: ...                     value += 1 ... >>> g = gen(1) >>> next(g) 1 >>> g.send(2) ('The value is', 2) 3 >>> g.send(10) ('The value is', 10) 11 >>> next(g) ('The value is', None) ``` |

在这个例子里, value = (yield value) 这个形式看起来很复杂. 但两个value 的含义并不相同. 具体来看, 执行next()时, generator执行到yield value表达式, 保存上下文环境暂停返回当前值1. 再执行send(value)时, 从value = yield开始, 打印传入的值 2, 再次遇到yield value暂停返回当前值 3 (上个循环时 加上 1). send(10)是一样的. 在看最后一个next(), 这里需要记住的是调用next()表达式的值时, yield的值总是为None. 因此, 在这里返回None.

接下来, 我们来实现一下Python 内建函数 range() [实现方法](http://thepythonguru.com/python-generators/) (复刻版, 非真实实现):

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 ``` | ``` >>> def my_range(start, stop, step = 1): ...     if stop <= start: ...         raise RuntimeError("Start must be smaller than stop") ...     i = start ...     while i < stop: ...         yield i ...         i += step ... >>> try: ...     for k in my_range(10, 50, 3): ...         print(k) ... except RuntimeError as ex: ...     print(ex) ... except: ...     print("Unknown error occurred") ... 10 13 16 19 22 25 28 31 34 37 40 43 46 49 ``` |

最后, generator 的另外两个方法分别是 throw(type[, value[, traceback]]) 和 close(). 前者用于抛出 type 异常, 后者用于关闭generator.
我们直接看下[Python文档](https://docs.python.org/3/reference/expressions.html#examples)的例子:

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` >>> def echo(value=None): ...     print("Execution starts when 'next()' is called for the first time.") ...     try: ...         while True: ...             try: ...                 value = (yield value) ...             except Exception as e: ...                 value = e ...     finally: ...         print("Don't forget to clean up when 'close()' is called.") ... >>> generator = echo(1) >>> print(next(generator)) Execution starts when 'next()' is called for the first time. 1 >>> print(next(generator)) None >>> print(generator.send(2)) 2 >>> generator.throw(TypeError, "spam") TypeError('spam',) >>> generator.close() Don't forget to clean up when 'close()' is called. ``` |
