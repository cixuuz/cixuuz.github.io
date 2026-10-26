---
title: "Machine Learning Framework"
description: "境界 1：参数可单机存储和更新"
date: "2017-10-07"
---

# 机器学习架构

<https://mp.weixin.qq.com/s/eQ4CcqhGd070BYSQdonO5g>

境界 1：参数可单机存储和更新  
此种境界较为简单，但仍可以使用参数服务器，通过数据并行来加速模型的训练。

境界 2：参数不可单机存储，可以单机更新  
此种情况对应的是一些简单模型，比如 sparse logistic regression；当 feature 的数量突破百亿的时候，LR 的权重参数不太可能在一台机器上完全存下，此时必须使用参数服务器架构对模型参数进行分片。但是注意一点，SGD 的更新公式：

其中可以分开到单个维度进行计算，但是单个维度的 wi=f(w)xi，这里的 f(w) 表示是全部参数 w 的一个函数，具体推导比较简单，这里篇幅所限就不赘述了。只是想说明 worker 在计算梯度的时候可能需要使用到上一轮迭代的所有参数。
而我们之所以对参数进行分片就是因为我们无法将所有参数存放到一台机器，现在单个 worker 有需要使用所有的参数才能计算某个参数分片的梯度，这不是矛盾吗？可能吗？
答案是可能的，因为单个样本的 feature 具有很高的稀疏性（sparseness）。例如一个百亿 feature 的模型，单个训练样本往往只在其中很小一部分 feature 上有取值，其他都为 0（假设 feature 取值都已经离散化了）。因此计算 f(w) 的时候可以只拉取不为 0 的 feature 对应的那部分 w 即可。有文章统计，一般这个级别的系统，稀疏性往往在 0.1%（or 0.01%，记得不是很准，大致这样）以下。这样的稀疏性，可以让单机没有任何阻碍的计算 f(w)。
目前公司开源的 Angel 和 AILab 正在做的系统都处于这个境界。而原生 Spark 还没有达到这个境界，只能在中小规模的圈子里厮混。Angel 改造的基于 Angel 的 Spark 则达到了这个境界。

境界 3：参数不可单机存储，不可单机更新，但无需模型并行  
境界 3 顺延境界 2 而来，当百亿级 feature 且 feature 比较稠密的时候，就需要计算框架进入到这层境界了，此时单个 worker 的能力有限，无法完整加载一个样本，也无法完整计算 f(w)。怎么办呢？其实很简单，学过线性代数的都知道，矩阵可以分块。向量是最简单的矩阵，自然可以切成一段一段的来计算。只是调度器需要支持算符分段而已了。

境界 4：参数不可单机存储，不可单机更新，需要模型并行  
进入到这个层次的计算框架，可以算是世界一流了。可以处理超大规模的神经网络。这也是最典型的应用场景。此时不仅模型的参数不能单机存储，而且同一个迭代内，模型参数之间还有强的依赖关系，可以参见姐夫对 distbelief 的介绍里的模型切分。
此时首先需要增加一个 coordinator 组件来进行模型并行的 concurrent 控制。同时参数服务器框架需要支持 namespace 切分，coordinator 将依赖关系通过 namespace 来进行表示。
一般参数间的依赖关系因模型而已，所以较难抽象出通用的 coordinator 来，而必须以某种形式通过脚本 parser 来生产整个计算任务的 DAG 图，然后通过 DAG 调度器来完成。对这个问题的介绍可以参考 Erix Xing 的分享 [5]。

# reference

Wide & Deep Learning for Recommender Systems
Deep Neural Networks for YouTube Recommendations
<https://www.zhihu.com/question/53851014>
TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems
<http://www.jianshu.com/p/00736aa21dc8>
Large Scale Distributed Deep Networks
MapReduce: Simplified Data Processing on Large Clusters
Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing
<https://www.zhihu.com/question/55119470>
KunPeng: Parameter Server based Distributed Learning Systems and Its Applications in Alibaba and Ant Financial
An Architecture for Parallel Topic Models
Scaling Distributed Machine Learning with the Parameter Server
Piccolo: Building fast, distributed pro- grams with partitioned tables
More Effective Distributed ML via a Stale Synchronous Parallel Parameter Server
Angel-A Flexible and Powerful Parameter Server；黄明 ppt
