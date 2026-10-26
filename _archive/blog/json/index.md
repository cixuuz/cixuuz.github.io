---
title: "JSON是一种格式，基于文本，优于轻量，用于交换数据"
description: "(no summary)"
date: "2017-03-30"
---

- [JSON是一种格式，基于文本，优于轻量，用于交换数据](https://segmentfault.com/a/1190000008832185)
- 规范 http://json.org/
- object
  - {}
  - { members }
- members
  - pair
  - pair , members
- pair
  - string : value
- array
  - []
  - [ elements ]
- elements
  - value
  - value , elements
- value
  - string
  - number
  - object
  - array
  - true
  - false
  - null
- string
  - “”
  - " chars "
- chars
  - char
  - char chars
- char
  - any-Unicode-character-except-“-or--or-control-character
  - "
  - \
  - /

  - our-hex-digits
- number
  - int
  - int frac
  - int exp
  - int frac exp
- int
  - digit
  - digit1-9 digits
  - -digit
  - -digit1-9 digits
- frac
  - [0]. digits
- exp
  - e digits
- digits
  - digit
  - digit digits
- e
  - e
  - e+
  - e-
  - E
  - E+
  - E-

---

- [← Previous Post](/2017-03-30-python-profiling/ "python profiling and optimize")
- [Next Post →](/2017-03-28-All-about-hardware/ "SSD vs HDD的性能对比.讲解了为什么SSD的读写性能高于HDD")

**Contents**

none

##### [FEATURED TAGS](/tags/)

---

##### FRIENDS

- [Youlun](http://zhyoulun.com/)
