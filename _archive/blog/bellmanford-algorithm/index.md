---
title: "Bellman–Ford algorithm and Routing Information Protocol"
description: "There is an unacceptable solution for leetcode Minimum Height Trees due to time limit exceeded. But it’s an algorithm I didn’t know, so record it."
date: "2016-11-11"
---

There is an unacceptable solution for leetcode [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) due to time limit exceeded. But it’s an algorithm I didn’t know, so record it.

It’s [Bellman–Ford algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm) used in Routing Information Protocol.

# object

> computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.[1] It is slower than Dijkstra’s algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers.

# code

{% highlight python %}
function BellmanFord(list vertices, list edges, vertex source)
::distance[],predecessor[]

// This implementation takes in a graph, represented as
// lists of vertices and edges, and fills two arrays
// (distance and predecessor) with shortest-path
// (less cost/distance/metric) information

// Step 1: initialize graph
for each vertex v in vertices:
distance[v] := inf // At the beginning , all vertices have a weight of infinity
predecessor[v] := null // And a null predecessor

distance[source] := 0 // Except for the Source, where the Weight is zero

// Step 2: relax edges repeatedly
for i from 1 to size(vertices)-1:
for each edge (u, v) with weight w in edges:
if distance[u] + w < distance[v]:
distance[v] := distance[u] + w
predecessor[v] := u

// Step 3: check for negative-weight cycles
for each edge (u, v) with weight w in edges:
if distance[u] + w < distance[v]:
error “Graph contains a negative-weight cycle”
return distance[], predecessor[]
{% endhighlight %}
