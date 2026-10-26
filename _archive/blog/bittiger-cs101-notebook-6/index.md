---
title: "Bittiger cs101 notebook 5 - what happens when visit a website"
description: "1. Interruption"
date: "2016-11-07"
---

1. Interruption
   generates an interrupt  
   interrupt controller
2. Typeahead  
   processor  
   do\_IRO()  
   handler()  
   less delay: best: less than 10 ms  
   cache: 1. used before 2. used predictive
3. Http/Https:  
   protocol  
   IPV4: 256^4  
   IPV6:
4. DNS:  
   nslookup www.google.com  
   traceroute www.google.com  
   port:  
   443 https  
   8080⁄80 http
5. Seven Layers:  
   connect with https:  
   (7). Application Layer: https  
   (6). Presentation  
   (5). Session  
   (4). Transport:  
   tcp : find a road from a to b  
   tcp：Three Interaction Protocol  
   (3). Network: ip  
   (2). Data Link: ethernet  
   (1). Physical
6. Server-side:  
   node.js single thread, avoid context switching.  
   Context switching would causes loss of cache, and eventually reduce efficiency.
7. Render in browser:  
   User interface  
   Browser engine: data persistence(cookies, user information)  
   Rendering engine:  
   networking, js interpreter, ui backend  
   DOM tree: parse html into DOM tree  
   Style Rules: css parser  
   render tree: website
