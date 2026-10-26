---
title: "AI: Constraint Satisfaction Problems"
description: "1. States defined by values of a fixed set of variables from domain"
date: "2018-01-20"
---

# CSPs are a special kind of search problem

1. States defined by values of a fixed set of variables from domain
2. Goal test defined by constraints on variable values
3. acceptable solutions are complete and consistent
4. binary CSP: relates two variables; constraint graph: nodes are variables, arc are constraits.
5. Discrete variable(n) with finit domain(d): O(d^n) complete assignments
6. Discrete variable with infinit domain need a constraint
7. Varieties of constraints: involve one varible(unary), two(binary), three(higher-order)

# Backtracking

1. depth-first search with one variable assigned at each level
2. the basic uninformed algorithm for CSP

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21 ``` | ```  function BacktrackingSearch(csp) return solution or failure  return Backtrack({}, csp)    function Backtrack(assignment, csp) return solution or failure  # goal test  if assignment is complete then return assignment  # variable ordering/selection  var =  SelectUnassignedVariable(csp)  # value ordering  for each value in OrderDomainValues(var, assignment, csp) do  if value is consistent with assignment then  add {var=value} to assignment  # inferences from current state  inferences = Inference(csp, var, value)  if inferences != failure then  add inferences to assginment  result = Backtrack(assignment, csp)  if result != failture then  return result  remove {var=value} and inferences from assignment  return failure ``` |

# improve serach efficiency

- Variable ordering
- Most constrained variable or Minimum remaining values (MRV): choose the variable with the fewest legal values
- Degree heuristic: has the most number of unassigned neighbors
- Value ordering
- Least-constraining-value: the one that rules out the fewest values in the remaining variables
- Constraint propagation(inferences in code)
- Forward checking prevents assignments that lead to later failures
- Constraint propagation (e.g., arc consistency) does additional work to constrain values and detect inconsistencies early. based on X -> Y is consistent iff for every value x in X there is some allowed y in Y.

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19 ``` | ```  function AC-3(csp) return boolean  inputs: csp, a binary csp with components(X, D, C)  local varibales: queue, a queue of arcs, initially all the arcs in csp    while queue is not empty do  (xi, xj) = RemoveFirst(queue)  if Revise(csp, xi, xj) then  if Di is empty then return false  for each Xk in Xi.neighbours - Xi do  add (Xk, Xi) to queue  return true    function Revise(csp, xi, xj) return true iff revise domain  revised = false  for each x in Dj do  if no value y in Dj allows(X, y) then  delete x from Di  revised = true  return revised ``` |

---

- [← Previous Post](/ai-learning-from-obs/ "AI: Learning from observations")
- [Next Post →](/hardware-raid-principles/ "RAID基本原理")

**Contents**

1. [1. CSPs are a special kind of search problem](#csps-are-a-special-kind-of-search-problem)
2. [2. Backtracking](#backtracking)
3. [3. improve serach efficiency](#improve-serach-efficiency)

##### [FEATURED TAGS](/tags/)

[AI](/tags/#AI "AI")

---

##### FRIENDS

- [Youlun](http://zhyoulun.com/)
