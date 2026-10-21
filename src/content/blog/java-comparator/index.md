---
title: "Java::Comparator"
description: "做题的时候遇到了sort，想试试Java 8的新语法。于是有了一些研究："
date: "2017-08-29"
---

做题的时候遇到了sort，想试试Java 8的新语法。于是有了一些研究：

# Reference

1. [Very confused by Java 8 Comparator type inference](https://stackoverflow.com/questions/24436871/very-confused-by-java-8-comparator-type-inference)
2. access field by lambda.
   intervals is a list of interval.
   intervals.sort(Comparator.comparingInt((Interval i) -> i.start));

Comparator.comparing((Person p)->p.firstName)
.thenComparing(p->p.lastName)
.thenComparingInt(p->p.age);

Comparator.comparing(Person::getFirstName)
.thenComparing(Person::getLastName)
.thenComparingInt(Person::getAge);

@Override
public int compareTo(Person o){
return Comparator.comparing(Person::getFirstName)
.thenComparing(Person::getLastName)
.thenComparingInt(Person::getAge)
.compare(this, o);
}

# reference:

<https://dzone.com/articles/java-8-comparator-how-to-sort-a-list>
