---
title: "Bittiger cs101 notebook 3 - JVM"
description: "load code class and other java base classes such as java.io util …"
date: "2016-11-05"
---

# JVM

## class loader

load code class and other java base classes such as java.io util …  
![class loader](/assets/class_loader.png)

- static class will be loaded in prepare in link
- Resolve change symbol reference to actural address
- parallel to speed up
- NoClassDeFoundError from the first load part
- ClassNotFoundException from solve in link

## runtime data: memory

![runtime](/assets/runTimeData.png)

- metaspace: class like static, default 64MB max before Java 8
- heap: 25% space of memory  
  pay attention: heap is not the HEAP in data structure. It’s just an area in memory to store all objects.
- pc register: record each threads’s pc  
  which is a fixed concept representing an address in system
- stack frame stores local data and addresses of objects  
  actually, t1 points address of metaspace because the code is complied as byte code
- Qustions:

  - OutOfMemoryError: PermGen Space  
    1 PermGen Space is another name of metaspace
  - StackOverFlowError:
    4 and 5

## Execution Engine

![execution](/assets/executionEngine.png)

- JIT(just in time) Compiler: like cache to store those functions would be used frequently
- Hotspot profiler will count the calls of each func. When the number exceed the threshold  
  each time the count exceed some number, give a faster complier and reset to zero, count again
- Garbage collection will save space by eliminating unuseful object

## summary

![whole](/assets/cs10104whole.png)

## reference

<https://www.youtube.com/watch?v=ZBJ0u9MaKtM>  
<https://www.youtube.com/watch?v=UnaNQgzw4zY>  
<https://www.youtube.com/watch?v=_8-ht2AKyH4>
