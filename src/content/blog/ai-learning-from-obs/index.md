---
title: "AI: Learning from observations"
description: "Problem: decide whether to wait for a table at a restaurant, based on the following attributes:"
date: "2018-01-20"
---

# Decision tree learning

Problem: decide whether to wait for a table at a restaurant, based on the following attributes:

1. Alternate: is there an alternative restaurant nearby?
2. Bar: is there a comfortable bar area to wait in?
3. Fri/Sat: is today Friday or Saturday?
4. Hungry: are we hungry?
5. Patrons: number of people in the restaurant (None, Some, Full)
6. Price: price range ($, ,\displaystyle , ,$)
7. Raining: is it raining outside?
8. Reservation: have we made a reservation?
9. Type: kind of restaurant (French, Italian, Thai, Burger)
10. WaitEstimate: estimated waiting time (0-10, 10-30, 30-60, >60 minutes)

Aim: find a small tree consistent with the training examples Idea: (recursively) choose “most significant” attribute as root of tree or subtree

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9  10  11  12  13 ``` | ```  function DTL(examples,attributes,parent_examples) returns a tree  if examples is empty then return PLURALITY-VALUE(parent_examples)  else if all examples have the same classification then return the classification  else if attributes is empty then return PLURALITY-VALUE(examples)  else  A = arg max(attributes) IMPORTANCE(a,examples)  tree = a new decision tree with root test A  for each value vk of A do  exs = {e: e belongs to examples and e.A= vk }  subtree = DECISION-TREE-LEARNING(exs,attributes – A, examples)  add a branch to tree with label (A = vk ) and subtree subtree return tree    Function PLURALITY-VALUE selects the most common (or majority of the) output values ``` |

Implement IMPORTANCE(a,examples): - Idea: a good attribute splits the examples into subsets that are (ideally) “all positive” or “all negative” - Information theory: use notion of information gain. - Entropy H(V): a measure of the uncertainty of a random variable. More information -> reduced entropy. B(p) = - sum(prob*ln(prob)) - Remainder(A) = sum((pk+nk)/(p+n)*  B(pk/(pk+nk))) - Gain(A) = B(p/(p+n)) - remainder(A)

# Neural networks

feed-forward networks: - single layer perceptrons - multi layer perceptrons: powerful expressive, trained by gradient descent (error back-propagation) - have no internal state

---

- [Next Post →](/ai-constraint-satisfaction-problem/ "AI: Constraint Satisfaction Problems")

**Contents**

1. [1. Decision tree learning](#decision-tree-learning)
2. [2. Neural networks](#neural-networks)

##### [FEATURED TAGS](/tags/)

[AI](/tags/#AI "AI")

---

##### FRIENDS

- [Youlun](http://zhyoulun.com/)
