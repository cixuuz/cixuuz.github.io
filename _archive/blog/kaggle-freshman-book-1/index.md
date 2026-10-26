---
title: "Kaggle新生必读手册1"
description: "按，本文根据陈驰在tigger kaggle小组中的关于kaggle比赛的微讲座整理的。整理者：Wente Guo(正文部分), EK(QA部分及审核)"
date: "2016-06-20"
lang: "zh"
---

按，本文根据陈驰在tigger kaggle小组中的关于kaggle比赛的微讲座整理的。整理者：[Wente Guo](http://chnwentao.com/2016/06/20/cipo4xr3f0057xf1pg34kduux/)(正文部分), [EK](http://nychent.github.io/kaggle-freshman-book-1.cn/)(QA部分及审核)

> 主讲人陈驰@驰 ，NYU CS硕士毕业，现在在纽约一间创业公司负责全栈开发和数据分析的工作，主要背景是概率图谱和自然处理以及深度学习.

## Kaggle组队比赛的项目管理的解决方案

组队参加Kaggle比赛和一般软件工程项目管理有共性问题也有特性问题。

### 共性问题：

1. 成员的知识背景不足以完成任务
2. 时间的协调
3. 项目进度的把控
   等等

### 特性问题:

1. 研究的性质
2. 不容易明确分工和协调合作

## BestPractise文件

那么怎么解决特性问题，在我们现在 Data Science (简称 DS)项目的试行中有个方法还不错:
建立一个叫BestPractise.md文件（举个例子）去解决. 这个文件由**分析报告**和**资源整合**两部分组成

### 分析报告部分：

由队长把所有队员的每次分析根据 Data Science Pipeline 整合到里面。

这个有几个好处：
1. 提供统一的入口看到所有人的分析情况
2. 变无序为有序，理清大家分析之间的联系
3. 避免重复别人的工作
4. 更好地把握进度

### 资源整合部分：

这个部分很简单，类似于FAQ，把大家经常需要用到的资源放在这里，各取所需。常用的资源包括:
- 语言入门（例如Python数据分析的一页文档）
- Git基本操作、
- Machine Learning基本概念，等等

## Data Science Pipeline

在带DS项目过程中，我们觉得特别需要明确这个流程，尤其是新生，不知道如何入手的时候，DS Pipeline可以帮助大家更好的了解流程:

### 1. 读入数据

这个一般不会有太大的问题，但是在Kaggle比赛中，我也会经常遇到数据量太大不能全部数据?

- 抽样 - 关键点我暂时了解是一个，是抽样平均，使得数据有代表性
- 一般我不会建议用分布式.

### 2. 数据预处理（数据转换、数据清理、空值处理)

- 譬如Normalization这种预处理是可以有助于加快训练速度,具体原因可以看一下Coursera ML Standford的视频.
- 数据清洗在自然语言里用的就特别多，信号也是 譬如Tweet里面有这样的词 loooooove you
- 空值处理也是，不过空值处理也是分情况的，一般可以说可以用统一的值譬如0代替，尤其空值不是很多的时候，还可以用插值的方法来代替.

### 3. 探索性分析（提出问题、建立假设、数据可视化、数据挖掘/总结

很多时候我们看到数据时候不是直接埋头分析，而是往往问合适的问题，然后提出假设。譬如你头发稀疏的程度与你取得好成绩会不会有负相关关系。然后可以分别从数据的可视化（直观上）和特定的数字特征譬如平均值来看一它们的关系.

个人经验是，很多时候可视化能带来很多很有用的信息,譬如一个商品在一些节假日就卖出特别多，画出图就很明显.

### 4. 特征工程（提取特征、特征处理、特征选取）

主元素分析（PCA) 这是特征选取的一种方法。当然大家也可以根据模型的好坏来对特征进行选取（迭代速度慢）

### 5. 模型工程（模型建立、模型选取、模型集成）

模型建立一般需要你对模型的特性熟悉.
譬如Naive Bayesian Network.,它假设字与字之间是没有联系的（事实当然不是），但这是它的特性。除了Spam filter，它在处理其他需要考虑字与字之间联系的问题时，效果会明显不好.
而对于模型的选取，除了刚才对于所说对于模型的了解上，就会有些指标，譬如从模型预测的结果来判断模型的好坏.

模型的集成(ensembling method)我要说的是Kaggle比赛经常用的一个技巧,可以比普通水平弱的预测器或分类器做出比他们效果好不少的模型.
很多库本身就实现了模型的集成。

### 6. 参数选取

Cross Validation是常用的方法，另外还可以通过选取不同的参数值来比较结果的好坏.

### 7.模型测试（数据划分、测量确定、分析结果、修正假设）

## 队伍管理的阶段性变化

比较可行的过程:

1. 最开始大家各自分析
2. 各自的水平会呈现和产生问题（适合分工的时机）
3. “牛的人应该提供思路和问题—-入门的人去完成—-牛人再帮忙”（需要分析报告部分）
4. 为了解决常见的问题（需要资源整合部分）
5. 还有一个痛点：实时回答问题（Stackoverflow或者Github的Issue）

## 项目管理的注意事项(开会、评估、语言）

### 开会

暂时在DS项目组我们开会的内容基本只有一个，就是根据之前说的BestPractise对没解决的问题查漏补缺，共同解决，然后根据分析的结果产生新的思路。

### 评估

评估方面主要有两个方面的评估：人员和工具。之所以要评估，是为了更好计算每个小任务完成的时间，并在没完成的时候对评估的角度思考解决的方法.

队员评估
1. 工具不熟练
2. 知识背景不够

工具评估
1. 工具的学习曲线
2. 工具提高的效率

### 语言

编程语言要统一。之前有出现过一组，因为大家使用不同语言，而是希望直接看分析结果，这个其实是要求每个人都有独立分析的能力，最后进展不是很顺利

## 资源介绍

1. @EK是项目组负责人之一，最近在做项目的资源整理。在整理这类文件有什么问题，@EK的经验会帮到大家。
2. @F7是Data Science讨论群与Kaggle比赛的负责人
3. 最好的资源（Script & Forum in Kaggle)

## QA

注：没有注明的都是陈驰回答的内容

- Q: 怎么利用 Kaggle scripts? 别人写的script 我们能借用吗
- A: 是的. 现在kaggle出了这个功能很好, 就是直接用就是了. 不过关键是要看懂. 如果那门语言工具你不熟, 这个也比较花时间. script就是给你一个开始, 可以节省不少起步时间，我是很建议的.
- Q: 对于visualize data 总是担心 Univariate plot 不准 尤其是变量很多的时候, 这担心是多余的吗?
- A: 我能理解你想法. 一方面你可以用PCA或者ICA这些选一些在数学或者统计上重要的feature可视化. 另外多个变量时你也可以可视化他们之间的关系. (visualize data其实是很难的一件事，有很多clustering的方法都可以看，更高级的像 [T-SNE](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding) 也是很多paper会采用的方法, 现在貌似看layer都是用fergus的方法去visualize by Chenge宸歌Focus ) cluster很好, 包括在深度学习里我也会看每一层的饱和程度，然后对相应的层做一些处理, 也不容易. （我们最多可以visualize的就是3D，所以就是需要降维或者embedding by Chenge宸歌Focus）都要降维度
- Q: feature engineering 跟data visualization 有木有关系 或许我想问 feature engineering 的原则和方法思路
- A: feature engineering和data visualization的关系我了解的很简单. 从直观上观察，然后把一些特征hard code到feature里面. 譬如一个例子一年的节假日和停车位的空闲状态有关系, 得到这个信息. 可以把节假日hard code到feature里面.
- Q: 对了，对数据处理 比如文本型的，是不是这这样一个流程：
  文本过滤—> 分词—> 删除停词—> 提取词干 —> 生成词袋 —> 编号—->向量化
- A: 看你做什么，你可以这样刚才操作. 你最终目的是向量化. 文本就是向量化，如果你一般的数据·有数值、时序、category、还有一种我忘记了
- Q: 关于项目管理 问个特别现实的问题 离第一次submission 只有10天 应该采用哪种策略呢😂
- A: 一般最好一个月时间. 10天的话, 可以做出结果来, 就是对自己帮助可能不是很大. 因为刚才说的pipeline需要很多时间迭代思考.
- Q: 对于新手，有什么建议呢？
- A: 里面根据Data Science Pipeline理清思路，然后资源很多的话，你可以在kaggle forum看一下其他人用什么工具，另外和组内的大牛交流看一下他们做什么，用哪些资源.
- 如果是零基础的话，可以学一下
- coursera的机器学习（斯坦福）.
- [台大的机器学习课和台大的深度学习课](http://speech.ee.ntu.edu.tw/~tlkagk/courses_MLSD15_2.html)
- 建议选择titanic这种题目，资源都给大家配好
- udacity的深度学习课，适合一个周末刷完
- 我补充一点，大家如果真用深度学习话，除了知道各种模型，比较关键是知道里面的trick, trick的话有两个资源我比较推荐
- <https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf> 这篇论文是当时hinton被拉进google的关键文章, 里面有关键的trick
- <http://cs231n.stanford.edu/> 这个视频已经下架了，但是大家可以在网上搜到 <https://www.zhihu.com/question/41631631> 里面简洁扼要地讲了很多篇文章的trick
- trick不只是指调参数. 譬如data generation就是一种trick. 把cnn的 convolution从3\*3变成1\*3也是trick
- Q: 还有个问题 对于那种 variable很少但数据row 很多的data，有没有模型比较适合 ？
- A: 普通的logistic regression就足够了。row很多其实就是数据量很多，另外我个人觉得变量少，深度学习也适用是，是local minimum因此变少了
- [inception模型](http://www.cs.unc.edu/~wliu/papers/GoogLeNet.pdf)
- Q: 你平时用什么深度学习框架
- A: 入门的话我非常建议大家用keras. 不过caffe，torch，theano，keras都用过，keras是基于用theano的. 现在也支持tf backend, 然后keras还可以用现在很热的tensorflow做后端. 可以用和theano互换
- by lostleaf: keras给我的感觉就是无脑叠layer, 无脑训模型
- 正因为keras的无脑，keras上的github issue更多讨论的是模型的建立，在那里我学到很多。
- torch也是很简单易用，你会lua，我非常推荐。另外torch、theano、tensorflow他们实际上是科学计算加速的，不止用在神经网络上面，但是深度学习/神经网络都需要这些加速
- Q: 没有GPU用深度学习框架只是在计算方面很耗时这一点差异吗？
- A: by lostleaf 10~20倍, nvidia官方的测试结果(24 cores). 我自己测试MKL + numpy对比cublas在i7四核和980上跑，差距50倍
