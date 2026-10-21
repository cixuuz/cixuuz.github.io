---
title: "javascript es6"
description: "(no summary)"
date: "2017-08-20"
---

[ES6](https://www.w3cvip.org/topics/47)

- let则实际上为JavaScript新增了块级作用域。用它所声明的变量，只在let命令所在的代码块内有效。

  |  |  |
  | --- | --- |
  | ``` 1 2 3 4 5 6 7 ``` | ``` var a = []; for (let i = 0; i < 10; i++) { a[i] = function () { console.log(i); }; } a[6](); // 6 ``` |
- const用来声明常量。一旦声明，常量的值就不能改变。

  |  |  |
  | --- | --- |
  | ``` 1 ``` | ``` const monent = require('moment') ``` |
- arrow function

  |  |  |
  | --- | --- |
  | ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` class Animal { constructor(){     this.type = 'animal' } says(say){     setTimeout( () => {         console.log(this.type + ' says ' + say)     }, 1000) } } var animal = new Animal() animal.says('hi')  //animal says hi ``` |
