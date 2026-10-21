---
title: "Metrics selection"
description: "1. What metrics should be used for evaluating a model on an imbalanced data set? (precision + recall or ROC=TPR+FPR)"
date: "2017-09-13"
---

# Definitions

- A type I error occurs when the null hypothesis (H0) is true, but is rejected. Also known as false positive, where positive means rejection of a null hypothesis.
- A type II error occurs when the null hypothesis is false, but erroneously fails to be rejected. Also called as false negative, where negative refers to retaining a null hypothesis.
- TPR (True Positive Rate) = # True positives / # positives = Recall = \( TP \over (TP+FN) \)
- FPR (False Positive Rate) = # False Positives / # negatives = \( FP \over (FP+TN) \)
- [Precision](https://en.wikipedia.org/wiki/Precision_and_recall) = # True positives / # predicted positive = \( TP \over (TP+FP) \)
- \( F-measure = \frac{(\beta^2 + 1)PR}{\beta^2P+R} \)

# Majority of positive samples — ROC is a better metric

# small positive class — precision and recall are better

# reference

1. [What metrics should be used for evaluating a model on an imbalanced data set? (precision + recall or ROC=TPR+FPR)](https://medium.com/towards-data-science/what-metrics-should-we-use-on-imbalanced-data-set-precision-recall-roc-e2e79252aeba)
