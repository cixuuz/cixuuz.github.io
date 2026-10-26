---
title: "Database Notebook 1"
description: "Physical Data Independence: the ability to modify the physical schema without changing the logical schema"
date: "2016-10-29"
---

[TOC]

**Purpose** of Database Management System (DBMS) is to solve problems caused by file systems

- Data redundancy and inconsistency: duplicate information, file formats
- Difficulty in accessing data: new program to carry data
- Data isolation: files and formats
- Integrity: constraints are fixed, hard to add or change
- Atomicity of updates: failures may cause inconsistency.
- Concurrent access by multiple users
- Security: permissions

**Schema**: the logical structure of the database

**Instance**: the actual content of the database at a particular point in time

Physical Data Independence: the ability to modify the physical schema without changing the logical schema

Data Manipulation Language (DML)
Data Definition Language (DDL)

**Attributes**

- Domain of the attribute is the set of allowed values for the attribute
- values should be atomic/indivisible
- $null \in every \ domain$

## Relation schema

$R = (A\_1, A\_2, …, A\_3)$
$instructor = (ID, name , depart\_name, salary)$

**relation**
is a subset of the join of domains
$r \in D\_1 \* D\_2\*…\*D\_n$
is also a set of n-tuples $ a\_1, a\_2, …, a\_n$ where $a\_i \in D\_i$
is unordered

Normalization theory

**Keys** $\in $ R
**Super key** can identify a unique tuple of r®
minimal super key is **candidate key**
one of candidate key is **primary key**
**Foreign key**: value in one relation must appear in another

## Relational operators / Relational Algebra

| Op | Symbol | Example |
| --- | --- | --- |
| Selection | $\sigma\_p® = {t | t \in r\ and\ p(t) }$ $\land\ and \ \lor\ or \ \neg \ not $ |
| Projection | $\Pi\_{A\_1, A\_2, …, A\_k}® \ duplicates\ tuples\ are\ removed$ | $\Pi*{A, C} ® \ \Pi*{ID, name, salary}(instructor)$ |
| Cartesian product | $r \times s = {t\ q | t \in r \land q \in s} $ assume attributes are disjoint; rename if joint |
| Union | assume same attributes | $r \cup s $ |
| Difference |  | r - s |
| rename | $\rho*X(E) \ \rho*{X(A\_1, A\_2, …, A\_n)}(E)$ |  |
| **Derived ops** | — | — |
| Intersection |  | $r \cap s$ |
| Nature join | associative; commutative | $r \Join s$ |
| Theta Join | $r \Join*\theta s = \sigma*\theta(r \times s)$ |  |
| Assignment | $\leftarrow $ |  |
| Left outer join | r ⟕ s = $(r \Join s) \cup (r - \Pi\_R(r \Join s) \times {(null,…, null)}) $ |  |
| Right outer join | r ⟖ s |  |
| Full outer join | r ⟗ s |  |
| Division | $r \div s = largest\ t(R-S)\ st.\ t\times s \in r \ temp1 \leftarrow \Pi*{R-S}® \ temp2 \leftarrow \Pi*{R-S}((temp1 \times s) - \Pi\_{R-S, S}®) \ result = temp1 - temp2$ |  |
| **Extended ops** |  |  |
| Generalized projection | $\Pi\_{F\_1, F\_2, … ,F\_n}(E)$ | $\Pi\_{ID,salary/12}(instructor)$ |
| **Aggregation func** |  |  |
| avg, min, max, sum, count | $*{G1,G2,…Gn}G*{F\_1(A\_1),…,F\_n(A\_n)}(E)$ |  |
| rename | $*{dept\_name}G*{\boldsymbol{avg}(salary)\ \boldsymbol{as}\ avg\_sal}(instructor)$ |  |

## Modification

deletion
insertion
updating

## SQL & Relational Algebra

| SQL | RA |
| --- | --- |
| $select\ A\_1, A\_2, …, A\_n \ from\ r\_1, r\_2, … ,r\_m \ where\ P$ | $\Pi\_{A\_1,…,A\_n}(\sigma\_P(r\_1 \times … \times r\_m)) $ |
| $select\ A\_1, A\_2, sum(A\_3) \ from\ r\_1, r\_2, … ,r\_m \ where\ P \ group\ by\ A\_1, A\_2 $ | $\_{A\_1, A*2}G*{sum(A\_3)}(\sigma\_P(r\_1 \times … \times r\_m)) $ |

## Tuple relational calculus

safety

## Domain relational calculus

${ | P(X\_1,…,X\_n)}$

## SQL
