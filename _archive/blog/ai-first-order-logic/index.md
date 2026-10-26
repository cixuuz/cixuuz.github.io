---
title: "AI: first-order logic"
description: "While propositional logic assumes the world contains facts, first-order logic assumes the world contains objects, relations, functions, like natural language."
date: "2018-01-20"
---

While propositional logic assumes the world contains facts, first-order logic assumes the world contains **objects, relations, functions**, like natural language.

# Syntax

- Constants: Poly, 2, refer to objects
- Predicates: brother, larger than, refer to relations
- functions: sqrt, refer to functional relations
- variables: x, y
- connectives: ^ ⇒\Rightarrow⇒
- equality: =
- quantifiers: ∃\exists∃, ∀\forall∀

# Sentences

- atomic sentence = predicate(term1, …, termN) or term1 = term2. where term = function(term1, …, termN) or constant or variable
- complex sentences are made from atomic sentences using connectives

# Universal quantification

∀<variables><sentence>\forall <variables> <sentence>∀<variables><sentence> Typically, ⇒\Rightarrow⇒ is the main connective with ∀\forall∀, avoid ∧\wedge∧.

# Existential quantification

∃<variables><sentence>\exists <variables> <sentence>∃<variables><sentence> Typically, ∧\wedge∧ is the main connective with ∀\forall∀, avoid ⇒\Rightarrow⇒.

# Properties of quantifiers

- ∀x∀y\forall x \forall y∀x∀y is same as ∀y∀x\forall y \forall x∀y∀x
- ∃x∃y\exists x \exists y∃x∃y is same as ∃y∃x\exists y \exists x∃y∃x
- duality:
- ∀xRelation(object)\forall x Relation(object)∀xRelation(object) is same as ¬∀x¬Relation(object)\neg\forall x \neg Relation(object)¬∀x¬Relation(object)

# Universal instantiation

# Summary

- objects and relations are semantic primitives
- increase expressive power

---

- [← Previous Post](/deep_learning_behind_tensorflow_distribute_principles_and_framework/ "Deep Learning behind Tensorflow")
- [Next Post →](/amazon-ceo-letter-2016/ "Amazon CEO letter 2016")

**Contents**

1. [1. Syntax](#syntax)
2. [2. Sentences](#sentences)
3. [3. Universal quantification](#universal-quantification)
4. [4. Existential quantification](#existential-quantification)
5. [5. Properties of quantifiers](#properties-of-quantifiers)
6. [6. Universal instantiation](#universal-instantiation)
7. [7. Summary](#summary)

##### [FEATURED TAGS](/tags/)

[AI](/tags/#AI "AI")

---

##### FRIENDS

- [Youlun](http://zhyoulun.com/)
