---
title: "Preicision, Recall, and F-Measure"
description: "This is one of notes from CS3943/9223 Foundation of Data Science at New York University."
date: "2016-03-31"
---

This is one of notes from CS3943/9223 Foundation of Data Science at New York University.

First of all, we have definitions:
In pattern recognition and information retrieval with binary classification, [precision](https://en.wikipedia.org/wiki/Precision_and_recall "precision") (also called positive predictive value) is the fraction of retrieved instances that are relevant, while recall (also known as sensitivity) is the fraction of relevant instances that are retrieved. Both precision and recall are therefore based on an understanding and measure of relevance.

## Precision

$$ recall = \frac{#\,of\,correct\,answers\,given\,by\,system\,total}{#\,of\,possible\,correct\,answers\,in\,text} $$

## recall

$$ recall = \frac{\text{# of correct answers given by system total}}{\text{# of possible correct answers in text definition}} $$

## F-measure

$$ F-measure = \frac{(\beta^2 + 1)PR}{\beta^2P+R}$$

- When \(\beta = 1\), precision and recall are weighted equally. In other words, it is F1 measure: $$F1-measure = \frac{2PR}{P+R}$$
- When \(\beta < 1\), precision is favored
- Otherwise, recall is favored
