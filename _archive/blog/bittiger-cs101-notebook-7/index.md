---
title: "Bittiger cs101 notebook 6 - web programming"
description: "POST: post data"
date: "2016-11-28"
---

# Http and Chrome dev tools

## Http header

- Host: send to where, dns lookup
- Referer: linked from where,
- User-Agent: browser, os
- Cache-Control:  
  - static: can cache
  - non-static: cannot cache
- Date: timestamp

## Http request methods

GET  
HEAD  
POST: post data  
PUT: store data  
DELETE  
TRACE  
OPTIONS  
CONNECT

## status

304: cached content

# Restful api

reasons:
- single page application  
- mobile and other services

## Representational State Transfer

### Resources

### Representational

Accept: xml json etc

### State Transfer

### Stateless

1. No client state at server
2. Any State is maintained at Client side
3. Each request has all the information to process the request: the same url/request will get the same response

### Restful api: Good examples:

- A URL indentifies a resource
- URLs should include nouns, not verbs  
  good: Post <https://url>  
  bad: <https://url/post>
- Use http verbs(GET, POST, DELETE, PUT)  
  | POST | GET | PUT | DELETE |
  |-|-|-|-|
  | CREATE | READ | UPDATE | DELETE |
- Use plural noun only for consistency, not single
- don’t need to go deeper than resource/identifier/resource
- put version number at your api
- specify optional fields in a comma seperated list
- example: need to tradeoff  
  not rest: POST www.url.com/login  
  restful: GET www.url.com/users/{username}
