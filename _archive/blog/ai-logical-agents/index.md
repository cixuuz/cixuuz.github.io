---
title: "AI: Logical Agents"
description: "a set of sentences. - inference:deriving new sentences from old - TELL: add new sentences to the knowledge base - ASK: a way to query what is known. The…"
date: "2018-01-20"
---

# knowledge base

a set of sentences. - inference:deriving new sentences from old - TELL: add new sentences to the knowledge base - ASK: a way to query what is known. The standard names for these operations

# Generic KB-Based Agent

Similar to agents with internal states. 

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8 ``` | ```  function KB-Agent(percept) returns an action  static KB = a knowledge base,  t = 0 // a counter indicating time  tell(KB, make_percept_sentence(percept, t))  action = ask(KB, make_action_query(t))  tell(KB, make_action_sentence(action, t))  t++  return action ``` |

Agent must be able to: - Represent stats and actions; - Incorporate new percepts; - Update internal representation of the world; - Deduce hidden properties of the world; - Deduce appropriate actions.

# logic

- Syntax: what expressions are legal
- Semantics: what legal expression mean
- entailment: α ⊨\models⊨ β if and only if, in every model in which α is true, β is also true.
- Models: M(alpha) = set of all models of alpha: alpha ⊨\models⊨ beta if and only if M(alpha) ⊆\subseteq⊆ M(beta)
- Soundness: An inference algorithm that derives only entailed sentences is called sound or truth- preserving.
- Completeness: an inference algorithm is complete if it can derive any sentence that is entailed.

# Propositional logic:

- Syntax: ¬∧∨⇒()implication⇔(biconditional)\neg \wedge \vee \Rightarrow ()implication \Leftrightarrow (biconditional)¬∧∨⇒()implication⇔(biconditional)
- sematic:
- ¬P is true iff P is false in m.
- P ∧ Q is true iff both P and Q are true in m.
- P ∨ Q is true iff either P or Q is true in m.
- P ⇒ Q is true unless P is true and Q is false in m.
- P ⇔ Q is true iff P and Q are both true or both false in m.

## Truth tables (model checking)

| P | Q | ¬P\neg P¬P | P∧QP\wedge QP∧Q | P∨QP \vee QP∨Q | P⇒\Rightarrow⇒Q | P⇔\Leftrightarrow⇔Q |
| --- | --- | --- | --- | --- | --- | --- |
| False | False | True | True | False | True | True |
| False | True | True | False | True | True | False |
| True | False | False | False | True | False | False |
| True | True | False | True | True | True | True |

- True table enumeration algorithm is sound and complete
- Time: O(2n)O(2^n)O(2​n​​), n symbols
- Space: O(n)O(n)O(n)

Standard logical equivalences: α≡β if and only if α |= β and β |= α - (α ∧ β) ≡ (β ∧ α) commutativity of ∧ - (α ∨ β) ≡ (β ∨ α) commutativity of ∨ - ((α ∧ β) ∧ γ) ≡ (α ∧ (β ∧ γ)) associativity of ∧ - ((α ∨ β) ∨ γ) ≡ (α ∨ (β ∨ γ)) associativity of ∨ - ¬(¬α) ≡ α double-negation elimination - (α ⇒ β) ≡ (¬β ⇒ ¬α) contraposition - (α ⇒ β) ≡ (¬α ∨ β) implication elimination - (α ⇔ β) ≡ ((α ⇒ β) ∧ (β ⇒ α)) biconditional elimination - ¬(α ∧ β) ≡ (¬α ∨ ¬β) De Morgan - ¬(α ∨ β) ≡ (¬α ∧ ¬β) De Morgan - (α ∧ (β ∨ γ)) ≡ ((α ∧ β) ∨ (α ∧ γ)) distributivity of ∧ over ∨ - (α ∨ (β ∧ γ)) ≡ ((α ∨ β) ∧ (α ∨ γ)) distributivity of ∨ over ∧

## Theorem proving

- A sentence is **valid** if it is true in all models
- Deduction theorem: for any sentences α and β, α ⊨\models⊨ β if and only if the sentence (α ⇒ β) is valid.
- A sentence is satisﬁable if it is true in, or satisﬁed by, some model. α |= β if and only if the sentence (α ∧ ¬β) is unsatisﬁable.
- Modus Ponens: whenever any sentences of the form α ⇒ β and α are given, then the sentence β can be inferred.  
  α⇒β,ββ\frac{\alpha \Rightarrow \beta, \beta}{\beta}​β​​α⇒β,β​​
- And-Elimination: α∧βα\frac{\alpha \wedge \beta}{\alpha}​α​​α∧β​​
- monotonicity: the set of entailed sentences can only increase as information is added to the knowledge base. $ if KB then KB $
- unit clause, where clause is a disjunction of literals: l1∨...∨lk,m1∨...∨mnl1∨...∨li−1∨li+1∨m1∨∨mj−1∨mj+1∨...∨mn\frac{l\_1 \vee ... \vee l\_k , m\_1 \vee ... \vee m\_n}{l\_1 \vee ... \vee l\_{i-1} \vee l\_{i+1} \vee m\_1 \vee \vee m\_{j-1} \vee m\_{j+1} \vee ... \vee m\_n}​l​1​​∨...∨l​i−1​​∨l​i+1​​∨m​1​​∨∨m​j−1​​∨m​j+1​​∨...∨m​n​​​​l​1​​∨...∨l​k​​,m​1​​∨...∨m​n​​​​
- conjunctive normal form:A sentence expressed as a conjunction of clauses
- Resolution Algorithm: 

  |  |  |
  | --- | --- |
  | ```  1  2  3  4  5  6  7  8  9  10 ``` | ```  function PL-Resolution(KB, a) returns true or false  clauses = the set of clauses in the CNF representation of KB and not a  new = {}  loop do  for each Ci, Cj in clauses do  resolvents = PL-Resolution(Ci, Cj)  If resolvents contains the empty clause return true  new = new U resolvents  if new belongs to clauses then return false  clauses = clauses U new ``` |

## Horn clauses

### Forward chaining

---

- [← Previous Post](/amazon-ceo-letter-2016/ "Amazon CEO letter 2016")
- [Next Post →](/intro-to-xpath/ "Intro to xpath")

**Contents**

1. [1. knowledge base](#knowledge-base)
2. [2. Generic KB-Based Agent](#generic-kb-based-agent)
3. [3. logic](#logic)
4. [4. Propositional logic:](#propositional-logic)
   1. [4.1. Truth tables (model checking)](#truth-tables-model-checking)
   2. [4.2. Theorem proving](#theorem-proving)
   3. [4.3. Horn clauses](#horn-clauses)
      1. [4.3.1. Forward chaining](#forward-chaining)

##### [FEATURED TAGS](/tags/)

[AI](/tags/#AI "AI")

---

##### FRIENDS

- [Youlun](http://zhyoulun.com/)
