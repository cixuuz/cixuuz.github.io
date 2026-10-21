---
title: "System Design - Web Crawler"
description: "The Crawler Service processes each page link by doing the following in a loop:"
date: "2017-10-18"
---

# Guideline:

The Crawler Service processes each page link by doing the following in a loop:
1. Takes the top ranked page link to crawl
2. Checks crawled\_links in the NoSQL Database for an entry with a similar page signature
3. If we have a similar page, reduces the priority of the page link
1. This prevents us from getting into a cycle; Continue
2. Else, crawls the link
- Adds a job to the Reverse Index Service queue to generate a reverse index
- Adds a job to the Document Service queue to generate a static title and snippet
- Generates the page signature
- Removes the link from links\_to\_crawl in the NoSQL Database
- Inserts the page link and signature to crawled\_links in the NoSQL Database
