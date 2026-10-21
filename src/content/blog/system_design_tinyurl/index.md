---
title: "System Design - TinyURL"
description: "Base10, Base62"
date: "2017-10-12"
---

# Two methods

## Hash Function

Pros:
- use traditional hash function
- randomly distributed
- support url clean
- hash functions cost time

cons:
- not short
- collisions, start collisions from 2^(n/2). solution: url + timestamp

## Auto-increment index

Base10, Base62

Pros:
- simple, good with rdb
- can be short
- no conflicts

cons:
- not support url clean
