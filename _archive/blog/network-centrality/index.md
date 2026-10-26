---
title: "Network Centrality"
description: "This is one of notes from CS3943/9223 Foundation of Data Science at New York University."
date: "2016-04-12"
---

This is one of notes from CS3943/9223 Foundation of Data Science at New York University.

---

In this article, we talk about how to measure the [centrality](https://en.wikipedia.org/wiki/Centrality) in networks.

## What is centrality?

In graph theory and network analysis, indicators of centrality identify the most important vertices within a graph.

Here is an example network with 5 nodes, and 5 links.
![Example](http://i.imgur.com/Zjb6TiL.png?1)

There are three ways to measure centrality:
1. Degree centrality
2. Betweenness centrality
3. Closeness centrality

## Degree centrality

For each node, it has a degree - the number of ties that a node has.
Here, we define **Standardized Degree**:
\[degree \over {N - 1}\]
where N is the total number of nodes in network

## Betweenness centrality

First, we define \(B(n)\) as the number of short paths that go through Node *n*.
To calculate \(B(n)\), we denote \(\sigma*{xy}(n)\) as the shortest path from x to y through *n*. Then, take node B as example, we have such equation:  
{% raw %}  
$$B(B) = {{\sigma*{AC}(B)}\over{\sigma*{AC}}} + {{\sigma*{AC}(B)}\over{\sigma*{AC}}} + {{\sigma*{AE}(B)}\over{\sigma*{AE}}} + {{\sigma*{CD}(B)}\over{\sigma*{CD}}} + {{\sigma*{CE}(B)}\over{\sigma*{CE}}} + {{\sigma*{DE}(B)}\over{\sigma\_{DE}}} \ = {\dfrac{1}{1}} + {\dfrac{1}{1}} + {\dfrac{2}{2}} + {\dfrac{1}{2}} + {\dfrac{0}{1}} + {\dfrac{0}{1}} \ = \dfrac{7}{2} $$
{% endraw %}
Still, we want a whole index to centrality. Thus, we have **Standardized Betweenness Centrality**:
$$\dfrac{B(n)}{\dfrac{(N-1)(N-2)}{2}}$$

## Closeness centrality

Definition:
$$C(n) = \dfrac{1}{Average (L(n, m))}$$
where \(L(n,m)\) is the shortest links from node n to node m.
For example:
$$Average L(A, m) = \dfrac{1+2+2+3}{4} \ = 2$$

## Conclusion

In our example, N = 4.

|—
| Node | Degree Centrality |Standardized Degree | Betweeness Centrality | Standardized Betweeness | Closeness Centrality
|-|:-|:-|:-:|-:|:-
| A | 1 | \(1\over4\) | 0 | 0 | \(1\over2\)
| B | 3 | \(3\over4\) | \(7\over2\) | \(7\over12\) | \(4\over5\)
| C | 2 | \(1\over2\) | 1 | \(1\over6\) | \(2\over3\)
| D | 2 | \(1\over2\) | 1 | \(1\over6\) | \(2\over3\)
| E | 2 | \(1\over2\) | \(1\over2\) | \(1\over12\) | \(4\over7\)
|—

latex Greek letter: <http://jblevins.org/log/greek>
