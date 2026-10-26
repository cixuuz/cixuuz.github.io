---
title: "Bittiger cs101 notebook 4 - multithreaded programming fundamentals"
description: "is a instance of a running program"
date: "2016-11-07"
---

# Process

is a instance of a running program  
- logical control flow: process execution interleaved  
- private address space: managed by virtual memory machine  
- for security

# Concurrent process

their time flow are overlapped

A Process with multithreaded

# Similar

Each has its own logical control flow
Each can run concurrently
Each is context switched

# different

Threads share code and data,
Threads are less expensive than processes in some degree

**Thread is blocked when preforming IO operations, the thread gives the cup to other threads**

Java threads:
java.lang.Thread implements run()

# Thread Synchronization

## safety

- if it behaves correctly when accessed from multiple threads
- don’t depend on OS scheduling
- no additional Synchronization needed from the calling code

## liveness
