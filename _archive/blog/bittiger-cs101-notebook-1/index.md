---
title: "Bittiger cs101 notebook - how to design a google sheet"
description: "1. know the features"
date: "2016-11-05"
---

# Structure

- Data Structure
- Algorithm
- Computer Architecture
- Operation System
- Computer Network
- Software Engineering
- Design thinking

# How to design a google sheet

1. know the features
2. How to store cells in a sheet:

   | Array | Linked List | Four Direction Node | operations |
   | --- | --- | --- | --- |
   | O(1) | O(1) | O(1) | update |
   | O(m\*n) | O(m+n) | O(p) | insert row or column |
   | O(m\*n) | O(m\*n) | O(p) | space: store cells |
3. Identifying Circular Dependency  
   DFS: fast but has stack overflow risk  
   BFS: handle large number of nodes and used in industry  
   BFS has less space than DFS.
4. space of each cell

   - max number of cells: \( 2\*10^6 \)
     - \( 2\*10^6 = 1M \approx 1s \). The running time can be observed.
     - \( 1M \approx 8MB \) memory limited
   - size of each number
     - 8 Byte (64 bit floating point)
     - ![double range]({{ site.url }}/assets/double-precise-ieee-64.png)  
       [reference wikipedia](https://en.wikipedia.org/wiki/Double-precision_floating-point_format#/media/File:IEEE_754_Double_Floating_Point_Format.svg)
     - reserve largest number as infinite
5. Co-operation’s solution is logs with timestamps

   - timestamps: logical > server > logical time  
     example: auto increment in MySQL
   - get mutex -> do some changes -> submit log and release mutex -> sync everyone
6. Latency vs Consistency in distributed system:

   - latency compensation  
     the value is rendered before sync but not display  
     need to communicate with server, it may be changed after sync
