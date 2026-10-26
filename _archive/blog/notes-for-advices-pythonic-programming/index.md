---
title: "notes for advices pythonic programming"
description: "记录一下自己认为比较有用的片段"
date: "2017-04-11"
---

# [编写高质量代码：改善Python程序的91个建议](https://book.douban.com/subject/25910544/) 的读书笔记

记录一下自己认为比较有用的片段

## 10 充分利用 Lazy evaluation 的特性

- if x and y，在 x 为 false 的情况下 y 表达式的值将不再计算。
- if x or y，当 x 的值为 true 的时候将直接返回，不再计算 y 的值。

## isinstance支持多类型检查

{% codeblock %}
>>> isinstance(2, float)
False
>>> isinstance(“a”, (str, unicode))
True
>>> isinstance((2, 3), (str, list, tuple)) # 支持多种类型列表
True
{% endcodeblock %}

## join() 方法的效率要高于 + 操作符。

当用操作符 + 连接字符串的时候，由于字符串是不可变对象，其工作原理实际上是这样的：如果要连接如下字符串：S1+S2+S3+…+SN，执行一次 + 操作便会在内存中申请一块新的内存空间，并将上一次操作的结果和本次操作的右操作数复制到新申请的内存空间，在 N 个字符串连接的过程中，会产生 N-1 个中间结果，每产生一个中间结果都需要申请和复制一次内存，总共需要申请 N-1 次内存，从而严重影响了执行效率，**时间复杂度近似为 O(n^2)**。
而当用 join() 方法连接字符串的时候，会首先计算需要申请的总的内存空间，然后一次性申请所需内存并将字符序列中的每一个元素复制到内存中去，**所以 join 操作的时间复杂度为 O(n)**。

## 31：记住函数传参既不是传值也不是传引用

- Prefer to call by reference
  对于 Python 函数参数是传值还是传引用这个问题的答案是：都不是。正确的叫法应该是传对象（call by object）或者说传对象的引用（call-by-object-reference）。函数参数在传递的过程中将整个对象传入，对可变对象的修改在函数外部以及内部都可见，调用者和被调用者之间共享这个对象，而对于不可变对象，由于并不能真正被修改，因此，修改往往是通过生成一个新对象然后赋值来实现的。
  {% codeblock %}
  >>> def test\_func(a\_list):
  a\_list[0] = ‘a’
  print(“0: {}“.format(a\_list))
  a\_list = [“b”,“c”,“d”]
  print(“1: {}“.format(a\_list))

> > > a\_list = [“c”,“d”,“e”]
> > > test\_func(a\_list)
> > > 0: [‘a’, ’d’, ‘e’]
> > > 1: [‘b’, ‘c’, ’d’]
> > > a\_list
> > > [‘a’, ’d’, ‘e’]
> > > {% endcodeblock %}

## 40：深入掌握 ConfigParser

ConfigParser 的基本用法通过手册可以掌握，但是仍然有几个知识点值得注意。

首先就是 getboolean() 这个函数。getboolean() 根据一定的规则将配置项的值转换为布尔值，如以下的配置：
[section1]
option1=0
当调用 getboolean(“section1”, “option1”) 时，将返回 False。不过 getboolean() 的真值规则值得一说：除了 0 以外，no、false 和 off 都会被转义为 False，而对应的 1、yes、true 和 on 则都被转义为 True，其他值都会导致抛出 ValueError 异常。
除了 getboolean() 之外，还需要注意的是配置项的查找规则。
首先，在 ConfigParser 支持的配置文件格式里，有一个 [DEFAULT] 节，当读取的配置项不在指定的节里时，ConfigParser 将会到 [DEFAULT] 节中查找。
除此之外，还有一些机制导致项目对配置项的查找更复杂，这就是 class ConfigParser 构造函数中的 defaults 形参以及其 get(section, option[, raw[, vars]]) 中的全名参数 vars。如果把这些机制全部用上，那么配置项值的查找规则如下：
如果找不到节名，就抛出 NoSectionError
如果给定的配置项出现在 get() 方法的 var 参数中，则返回 var 参数中的值
如果在指定的节中含有给定的配置项，则返回其值
如果在 【DEFAULT】中有指定的配置项，则返回其值
如果在构造函数的 defaults 参数中有指定的配置项，则返回其值
抛出 NoOptionError
Python 中字符串格式化可以使用以下语法：
{% codeblock %}
>>> “%(protocol)s://%(server)s:%(port)s/” % {“protocol”: “http”, “server”: “example.com”, “port”: 1080}
“<http://example.com:1080/">
{% endcodeblock %}
其实 ConfigParser 支持类似的用法，所以在配置文件中可以使用。如，有如下配置选项：
{% codeblock %}

# format.conf

[DEFAULT]
conn\_str = %(dbn)s://%(user)s:%(pw)s@%(host)s:%(port)s/%(db)s
dbn = mysql
user = root
host = localhost
port = 3306
[db1]
user = aaa
pw = ppp
db = example
[db2]
host = 192.168.0.110
pw = www
db = example
{% endcodeblock %}

## 57：为什么需要 self 参数

在类中当定义实例方法的时候需要将第一个参数显式声明为 self，而调用的时候并不需要传入该参数。
self 表示的就是实例对象本身，即类的对象在内存中的地址。self 是对对象本身的引用。我们在调用实例方法的时候也可以直接传入实例对象。其实 self 本身并不是 Python 的关键字（cls 也不是），可以将 self 替换成任何你喜欢的名称，如 this、obj 等，实际效果和 self 是一样的（但并不推荐，因为 self 更符合约定俗成的原则）
在方法声明的时候需要定义 self 作为第一个参数，而调用方法的时候却不用传入这个参数。虽然这并不影响语言本身的使用，而且也很容易遵循这个规则，但既然如此，为什么必须在定义方法的时候声明 self 参数？原因如下：
Python 在当初设计的时候借鉴了其他语言的一些特征，如 Moudla-3 中方法会显式地在参数列表中传入 self。Python 起源于 20 世纪 80 年代末，那个时候的很多语言都有 self，如 Smalltalk、Modula-3 等。Python 在最开始设计的时候受到了其他语言的影响，因此借鉴了其中的一些理念。
Python 语言本身的动态性决定了使用 self 能够带来一定便利。
Python 属于一级对象语言（first class object)，如果 m 是类 A 的一个方法，有好几种方式都可以引用该方法：
{% codeblock %}
>>> class A:
def m(self, value):
pass
>>> A.**dict**[“m”]
>>> A.m.**func**
{% endcodeblock %}
实例方法是作用于对象的，最简单的方式就是将对象本身传递到该方法中去，self 的存在保证了 A.**dict**[’m’](a, 2) 的使用和 a.(2) 一致。同时当子类覆盖了父类中的方法但仍然想调用该父类的方法的时候，可以方便地使用 baseclass.methodname(self, ) 或 super(childclass, self).methodname() 来实现。
在存在同名的局部变量以及实例变量的情况下使用 self 使得实例变量更容易被区分

- Guido 认为，基于 Python 目前的一些特性（如类中动态添加方法，在类风格的装饰器中没有 self 无法确认是返回一个静态方法还是类方法等）保留其原有设计是个更好的选择，更何况 Python 的哲学是：显示优于隐式（Explicit is better than implicit）。

## 59：理解描述符机制

除了在不同的局部变量、全局变量中查找名字，还有一个相似的场景，那就是查找对象的属性。在 Python 中，一切皆是对象，所以类也是对象，类的实例也是对象。
每一个类都有一个 **dict** 属性，其中包含的是它的所有属性，又称为类属性。
除了与类相关的类属性之外，每一个实例也有相应的属性表（**dict**），称为实例属性。当我们通过实例访问一个属性时，它首先会尝试在实例属性中查找，如果找不到，则会到类属性中查找。
实例可以访问类属性，但与读操作有所不同，如果通过实例增加一个属性，只能改变此实例的属性，对类属性而言，并没有变化。
能不能给类增加一个属性？答案是，能，也不能。说能是因为每一个 class 也是一个对象，动态地增减对象的属性与方法正是 Python 这种动态语言的特性，自然是支持的。
说不能，是因为在 Python 中，内置类型和用户定义的类型是有分别的，内置类型并不能够随意地为它增加属性或方法。
当我们通过 “.” 操作符访问一个属性时，如果访问的实例属性，与直接通过 **dict** 属性获取相应的元素是一样的；而如果访问的是类属性，则并不相同；”.” 操作符封装了对两种不同属性进行查找的细节。
访问类属性时，通过 **dict** 访问和使用 “.” 操作符访问是一样的，但如果是方法，却又不是如此了。
当通过 “.” 操作符访问时，Python 的名字查找并不是先在实例属性中查找，然后再在类属性中查找那么简单，实际上，根据通过实例访问属性和根据类访问属性的不同，有以下两种情况：
一种是通过实例访问，比如代码 obj.x，如果 x 是一个描述符，那么 **getattribute**() 会返回 type(obj).**dict**[‘x’].**get**(obj, type(obj)) 结果，即：type(obj) 获取 obj 的类型；type(obj).**dict**[‘x’] 返回的是一个描述符，这里有一个试探和判断的过程；最后调用这个描述符的 **get**() 方法。
另一个是通过类访问的情况，比如代码 cls.x，则会被 **getattribute**() 转换为 cls.**dict**[‘x’].**get**(None, cls)。
描述符协议是一个 Duck Typing 的协议，而每一个函数都有 **get** 方法，也就是说其他每一个函数都是描述符。
描述符机制有什么作用？其实它的作用编写一般程序的话还真用不上，但对于编写程序库的读者来说就有用了，比如已绑定方法和未绑定方法。
由于对描述符的 **get**() 的调用参数不同，当以 obj.x 的形式访问时，调用参数是 **get**(obj, type(obj))；而以 cls.x 的形式访问时，调用参数是 **get**(None, type(obj))，这可以通过未绑定方法的 im\_self 属性为 None 得到印证。
除此之外，所有对属性、方法进行修饰的方案往往都用到了描述符，比如 classmethod、staticmethod 和 property 等。以下是 property 的参考实现：
{% codeblock %}
class Property(object):
“Emulate PyProperty\_Type() in Objects/descrobject.c”
def **init**(self, fget=None, fset=None, fdel=None, doc=None):
self.fget = fget
self.fset = fset
self.fdel = fdel
self.**doc** = doc
def **get**(self, obj, objtype=None):
if obj is None:
return self
if self.fget is None:
raise AttributeError, “unreadable attribute”
return self.fget(obj)
def **set**(self, obj, value):
if self.fset is None:
raise AttributeError, “can’t set attribute”
self.fset(obj, value)
def **delete**(self, obj):
if self.fdel is None:
raise AttributeError, “can’t delete attribute”
self.fdel(obj)
{% endcodeblock %}
