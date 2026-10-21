---
title: "AI-notes"
description: "1. Four different views of AI"
date: "2017-03-19"
---

# Catalog

1. [Four different views of AI](#four-different-views-of-ai)
2. [Intelligent Agents](#rational-agents)
   1. [Simple reflex agents](#simple-reflex-agents)
   2. [Model-based reflex agents](#model-based-reflex-agents-red-is-new)
   3. [Goal-based agents](#goal-based-agents)
   4. [Utility-based agents](#utility-based-agents)
   5. [Learning agents](#learning-agents)
3. [Solving Problems by Searching](#solving-problems-by-searching)
   1. [State space formulation](#state-space-formulation)
   2. [Uninformed search strategies](#uninformed-search-strategies-blind-search)
      - [breath-first](#breath-first)
      - [depth-first](#depth-first)
      - [depth limited search](#depth-limited-search)
      - [uniform-cost search](#uniform-cost-search)
      - [iterative deepening search](#iterative-deepening-search)
      - [bi-directional search](#bi-directional-search)
      - [summary](#summary)
   3. [Informed Search and Exploration](#informed-search-and-exploration)
      - [Greedy best-first search](#greedy-best-first-search)
      - [A\* Search](#a-search)
        - Admissible and consistent heuristic functions
        - Inventing and learning heuristic functions
4. [Adversarial Search](#adversarial-search)
   1. [Games](#games)
   2. [Minimax algorithm](#minimax-algorithm)
   3. [Alpha-Beta Pruning](#alpha-beta-pruning)
   4. [Evaluation functions](#evaluation-functions)
   5. [cutting off search](#cutting-off-search)

---

# Four different views of AI

- Think humanly: cognitive modeling is to determin how human thinks inside their brain.

  - top-down: test human behaviors.
  - down-top: identify neurological data
- Think rationally

  - logic: notations and rules of derivation of thoughts.
  - caveat: hard to handle with informal knowledge, and difference between principle and practice.
- Act humanly: Turing test
- Act rationally

  - rational agent: entity that perceives and acts.
  - caveat: computation limits, other words, cannot always perform actions to best results

# Rational Agents

Task setting (PEAS): performance measure, environment, actuators, and sensors

## Simple reflex agents

- If current state, then do certain action.
- based on only current state
- Implemented by condition-action rules

{% asset\_img simple\_reflex.png %}

{% codeblock %}
func simple\_reflex\_agents (percept) returns an action
# static
rules = a set of condition-action rules
# main
state = input(percept)
action = match\_rules(state)
return action
{% endcodeblock %}

## Model-based reflex agents (red is new)

- simple refelx agent **with internal state**

{% asset\_img model-based.png %}

{% codeblock %}
func reflex\_agents\_with\_state (percept) returns an action
# static: maintain internal state
rules = a of condition-action rules
state = description of current world
action = most recent action
# main
state = update\_state(state, action, percept)
action = match\_rules(state)
return action
{% endcodeblock %}

## Goal-based agents

- future is included in searching and planning actions.
- knowledge is represented explicity, and can be manipulated.

{% asset\_img goal\_based.png %}

## Utility-based agents

- state is quanlified based on utility function.
- goal can be reached by choosing a series states with higher utility.

{% asset\_img utility\_based.png %}

## Learning agents

- performance element as a selecter based on learning elements and percepts
- learning element improves performance
- problem generator explore more informative experience

{% asset\_img learning\_based.png %}

# Solving Problems by Searching

- Problem solving agent: it will percept a goal, and finish it, then have another goal

{% codeblock %}
function SIMPLE-PROBLEM-SOLVING-AGENT(percept) return an action
# static
seq = an action sequence, initially empty
state = some description of the current world
goal = a goal, initially null
problem = a problem formulation
# main
state = UPDATE-STATE(state, percept)
if seq is empty
goal = FORMULATE-GOAL(state)
problem = FORMULATE-PROBLEM(state, goal)
seq = SEARCH(problem)

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` if seq = failure      return a null action  action = FIRST(seq)  seq = REST(seq) return action ``` |

{% endcodeblock %}

## State space formulation

- problem solving formulation = inital state + actions + transition model
- all states that could be reached from the initial state by any sequence of actions
- action + transition model = successor function
- Performance measures

  - Completeness
  - Optimality
  - Time Complexity
  - Space Complexity
    - b: branching factor or max # of successors of any node of the search tree
    - d: depth of the sallowest goal node
    - m: max length of any path in the state space

# Uninformed search strategies (blind search)

## breath-first

- expand **shallowest** unexpanded node
- **frontier** is a FIFO queue
- check for goal state **as soon as a node is generated**, instead of when a node is to expand

### Tree Search

{% codeblock %}
function TREE-SEARCH ( problem ) return a solution or failure
# initial
frontier = queue(the initial state of problem)
if goal\_test(root)
return the corresponding solution
# main
loop do  
if is\_empty(frontier)  
return failure

|  |  |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ```     node = frontier.pop_left()     children = node.children      loop child in children do         if  goal_test(child)              return  the  corresponding solution          else               frontier.add(child) ``` |

{% endcodeblock %}

### Graph Search

{% codeblock %}
function GRAPH-SEARCH ( problem ) return a solution or failure  
# inital
frontier = queue(initial state of problem)
if goal\_test(root)
return the corresponding solution
explored = set()

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` # main loop do       if is_empty(frontier)         return  failure      node = frontier.pop()     explored.add(node)     children = node.children      loop child in children do         if goal_test(child)              return the corresponding solution          else if child not in explored or frontier             frontier.append(child) ``` |

{% endcodeblock %}

- Evaluation
  - Completeness: Yes if finite successors b
  - Optimality:
    - Yes if step cost is same
    - No if different cost
  - Time: Assume every state has b successors  
    $$1 + b^1 + b^2 + … + b^d = O(b^d)$$
  - Space: $O(b^d)$
    since keep all nodes to retrive possible path solution

## uniform-cost search

- expand node **with lowest path cost**, which is the sum of costs from intial node to current node, also g(n)
- **priority queue** ordered by path cost
- goal test **when the node poped(is about to expand)** from the frontier to avoid finding a short expensive path before a long cheap path.

### Tree search

{% codeblock %}
function TREE-SEARCH(problem) return a solution or failure
# initial
# frontier is a priority queue ordered by path cost
frontier = priority\_queue(the initial state of problem)
# main
loop do  
if is\_empty(frontier)
return failure
node = frontier.pop\_left()
if goal\_test(node)
return the corresponding solution
else
frontier.append(node.children)
{% endcodeblock %}

### Graph search

{% codeblock %}
function TREE-SEARCH(problem) return a solution or failure
# initial
# frontier is a priority queue ordered by path cost
frontier = priority\_queue(the initial state of problem)
explored = set()
# main
loop do  
if is\_empty(frontier)
return failure
node = frontier.pop\_left()
explored.add(node)
if goal\_test(node)
return the corresponding solution
if node.children not in frontier or explored set
frontier.append(node.children)
else if node.children in the frontier with a higher path cost
replace that node in the frontier with same node with lower path cost
{% endcodeblock %}

- Evaluation
  if b is finit, and step cost $\geq \epsilon \geq 0$
  - Completeness: Yes
  - Optimality: Yes
  - Time: $O(b^{1+\lfloor C^\* / \epsilon \rfloor})$ where $C^\*$ is the cost of optimal solution
  - Space: $O(b^{1+\lfloor C^\* / \epsilon \rfloor})$

## depth-first

- Expand **deepest** unexpanded node
- Frontier is a LIFO queue (stack)
- Goal-Test **when inserted**

{% codeblock iterative %}
function DFS-SEARCH(problem) return a solution or failure
# frontier is a LIFO queue
frontier = stack(initial state of problem)
if goal\_test(root)
return the corresponding solution

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` loop do      if is_empty(node)          return failure      node = frontier.pop_up()     children = node.chilren      for each child         if goal_test(child)              return the corresponding solution         else             frontier.push(child) ``` |

{% endcodeblock %}

- Evaluation
  - Completeness: No unless search space is finit and no loop
  - Optimality: No
  - Time: $O(b^m)$, terrible if m >> d
  - Space:  
    $O(dm)$ a single path + expanded unexplored nodes  
    $O(m)$ if backtracking

## depth limited search

- dfs with depth limit l to solve infinite-path problem

{% codeblock %}
function DEPTH-LIMITED-SEARCH(problem, limit) return a solution or failure/cutoff
return RECURSIVE-DLS(MAKE-NODE(problem.INITIAL-STATE), problem, limit)

function RECURSIVE-DLS(node, problem, limit) return a solution or failure/cutoff
if problem.GOAL-TEST(node.STATE)
return SOLUTION(node)
else if limit = 0
return cutoff
else
cutoff\_occurred? = false

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` for each action in problem.ACTIONS(node.STATE) do      child = CHILD-NODE(problem, node, action)      if (child ！= NULL)         result = RECURSIVE-DLS(child, problem, limit-1)          if result = cutoff              cutoff_occurred? = true          else if result ！= failure              return result  if cutoff_occurred?      return cutoff  else      return failure ``` |

/*At the end of the search process,
failure is returned to the main calling function only if no solution is found
and cutoff never occurred*/
{% endcodeblock %}

- Evaluation
  - Completeness: No if $l < d$
  - Optimality: No
  - Time: $O(b^l)$
  - Space: $O(bl)$, a single path + expanded unexplored nodes

## iterative deepening search

- IDS inherits the memory advantage of Depth-first search
- IDS has the completeness property of Breadth-first search

{% codeblock %}
function ITERATIVE\_DEEPENING\_SEARCH(problem) return a solution or failure
for depth = 1 to infinit do
result = DEPTH-LIMITED\_SEARCH(problem, depth)
if result != cutoff
return result
/*Final result returned is either a solution
or a failure if the algorithm exits the infinite loop.*/
{% endcodeblock %}

- Evaluation
  - Completeness: Yes, if no infinite path
  - Optimality: Yes, if cost is a non-decreasing function only of depth
  - Time: $(d)b + (d-1)b^2 + … + (1)b^d = O(b^d)$
  - Space: $O(bd)$, a single path + expanded unexplored nodes

## bi-directional search

- Both searches are BF
- Actions are sesily reversible, or predecessor can be computable
- Evaluation
  - Completeness: Yes, if b is finite
  - Optimality: Yes, if cost is constant
  - Time: $O(b^{d \over 2})$
  - Space: $O(b^{d \over 2})$

## Summary

{% asset\_img summary\_search.png %}

# Informed Search and Exploration

- g(n) = known path cost so far to node n.
- h(n) = estimate of (optimal) cost to goal from node n.

## Greedy best-first search

- f(n) = h(n)
- Greedy Best First Search (GBFS) expands the node n with smallest h(n).
- Evaluation
  - Completeness: No, may stuck in a loop
  - Optimality: No
  - Time: O(b^m)
  - Space: O(b^m), keeps all nodes in memory

## A\* Search

- f(n) = g(n)+h(n) = estimate of total cost to goal through node n
- A\* search expands the node n with smallest f(n)
- Admissible：$0 <= h(n) <= h^\*(n)$
- consistent: $h(n) <= c(n, a, n’) + h(n’)$. Also, f(n) is non-decreaing along any path
- Evaluation
  - Completeness: Yes if finit f < f(G)
  - Optimality: Yes if admissible (tree) or consistent (graph)
  - Optimally Efficient. no optimal algorithm with same heuristic is guaranteed to expand fewer nodes  
    **prove: optimality under admissible (tree)**  
    suppose there exists suboptimal goal G2 in the frontier queue. Let n be an unexpended node on a shortest cost path to optimal goal G.  
    $f(n) = g(n) + h(n) <= g(n) + h^*(n) = g(G) = g(G) + h(G) = f(G)$
    So, $f(n) <= f(G)$
    Since G2 is suboptimal, we have:  
    $g(G) < g(G2) => g(G) + h(G) < g(G2) + h(G2) => f(G) < f(G2)$
    Therefore, $f(n) <= f(G) < f(G2)$ for all n along the shortest cost path. A* algo will always select $f(G)$  
    **Proved**
  - Time: $O(b^d)$
  - Space: $O(b^d)$, keeps all nodes in memory
- Effective branching factor
  $$N + 1 = 1 + b^\* + (b^*)^2+ … + (b^*)^d$$
- Inventing and learning heuristic functions

  - Admissible heuristics can be derived from the exact solution cost of a relaxed version
  - sub-problem, ie. pattern database stores the exact solution
  - learning from experience

# Adversarial Search

## Games

Solution is strategy (approximate not accurate)  
- strategy specifies move for every possible opponent reply  
- Time limits force an approximate solution  
- Evaluation function: evaluate “goodness” of game position

## Minimax algorithm

{% codeblock %}
function MINIMAX-DECISION(state) returns an action
v = MAX-VALUE(state)
return the action in ACTIONS(state) with value v
function MAX-VALUE(state) returns a utility value
if TERMINAL-TEST(state)
return UTILITY(state)
v = - ∞
for each a in ACTIONS(state) do
v = MAX(v, MIN-VALUE(RESULT(state, a)))
return v
function MIN-VALUE(state) returns a utility value
if TERMINAL-TEST(state)
return UTILITY(state)
v = ∞
for each a in ACTIONS(state) do
v = MIN(v, MAX-VALUE(RESULT(state, a)))
return v
{% endcodeblock %}

- Evaluation
  - Completeness: Yes if d is finite
  - Optimality: Yes if against an optimal opponent
  - Time: $O(b^m)$
  - Space: $O(m)$, depth-first exploration, recursive

## Alpha-Beta Pruning

{% asset\_img ab1.png %}
{% asset\_img ab2.png %}
{% asset\_img ab3.png %}
{% asset\_img ab4.png %}
{% asset\_img ab5.png %}
{% asset\_img ab6.png %}
{% asset\_img ab7.png %}

{% codeblock %}
function MINIMAX-DECISION(state) returns an action
v = MAX-VALUE(state, -infinit, infinit)
return the action in ACTIONS(state) with value v
function MAX-VALUE(state, alpha, beta) returns a utility value
if TERMINAL-TEST(state)
return UTILITY(state)
v = - ∞
for each a in ACTIONS(state) do
v = MAX(v, MIN-VALUE(RESULT(state, a), alpha, beta))
if v >= beta
return v
alpha = max(alpha, v)
return v
function MIN-VALUE(state) returns a utility value
if TERMINAL-TEST(state)
return UTILITY(state)
v = ∞
for each a in ACTIONS(state) do
v = MIN(v, MAX-VALUE(RESULT(state, a)))
if v <= alpha
return v
beta = min(beta, v)
return v
{% endcodeblock %}

## Evaluation functions

linear weighted sum of features

## cutting off search

{% codeblock %}
if TERMINAL-TEST(state)
return UTILITY(state)
Become:
if CUTOFF-TEST(state, depth)
return EVAL(state)
{% endcodeblock %}

# Reference

1. CS 6613 / CS 4613 by E. K. Wong
2. [CS 171⁄03 from UCI](https://www.ics.uci.edu/~rickl/courses/cs-171/cs171-lecture-slides/cs-171-03-UninformedSearch.pdf)
3. [Artificial Intelligence: A Modern Approach](http://myweb.sabanciuniv.edu/rdehkharghani/files/2016/02/Prentice-Hall-Series-in-Artificial-Intelligence-Stuart-Russell-Peter-Norvig-Artificial-Intelligence_-A-Modern-Approach-Prentice-Hall-2010.pdf)
