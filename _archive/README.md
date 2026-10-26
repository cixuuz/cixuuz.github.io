# Archived posts

These 97 posts (2016–2019) were taken off the public site. Astro only publishes entries in `src/content/blog/`, so nothing in this folder is built, listed, or added to the RSS feed or sitemap.

40 of them were public. 57 were already `draft: true` and were not on the live site. Frontmatter is unchanged.

## Restore a post

```bash
git mv _archive/blog/<slug> src/content/blog/<slug>
```

If the post has `draft: true`, delete that line or it stays unpublished. Then rebuild (`npm run build`). Publishing to GitHub Pages is a separate step: `./deploy.sh` pushes `dist/` to `master`.

## Restore everything

```bash
git mv _archive/blog/* src/content/blog/
```

Posts that still say `draft: true` stay unpublished until that flag is removed.

## Add a new post

Create `src/content/blog/<slug>/index.md`:

```md
---
title: "Post title"
description: "One line summary."
date: "2026-10-26"
---

Write the post here.
```

Omit `draft` (or set it to `false`). The next build adds it to `/blog`, the homepage latest-posts list, `rss.xml`, and the sitemap.
