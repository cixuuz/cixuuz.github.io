---
title: "ds-summary"
description: "Strictly speaking, there is no such thing as “data science” (see What is data science and what is it not? ). See also: Vardi, Science has only two legs:…"
date: "2017-08-29"
draft: true
---

#### 

##### January 1, 0001

  

Strictly speaking, there is no such thing as “data science” (see What is data science and what is it not? ). See also: Vardi, Science has only two legs: <http://portal.acm.org/ft_gateway..>.

Here are some resources I’ve collected about working with data, I hope you find them useful (note: I’m an undergrad student, this is not an expert opinion in any way).

1) Learn about matrix factorizations

Take the Computational Linear Algebra course (it is sometimes called Applied Linear Algebra or Matrix Computations or Numerical Analysis or Matrix Analysis and it can be either CS or Applied Math course). Matrix decomposition algorithms are fundamental to many data mining applications and are usually underrepresented in a standard “machine learning” curriculum. With TBs of data traditional tools such as Matlab become not suitable for the job, you cannot just run eig() on Big Data. Distributed matrix computation packages such as those included in Apache Mahout [1] are trying to fill this void but you need to understand how the numeric algorithms/LAPACK/BLAS routines [2][3][4][5] work in order to use them properly, adjust for special cases, build your own and scale them up to terabytes of data on a cluster of commodity machines.[6] Usually numerics courses are built upon undergraduate algebra and calculus so you should be good with prerequisites. I’d recommend these resources for self study/reference material:
See Jack Dongarra : Courses and What are some good resources for learning about numerical analysis?

2) Learn about distributed computing

It is important to learn how to work with a Linux cluster and how to design scalable distributed algorithms if you want to work with big data (Why the current obsession with big data, when typically the larger the data, the harder it becomes to do even basic analysis and processing? ).
Crays and Connection Machines of the past can now be replaced with farms of cheap cloud instances, the computing costs dropped to less than $1.80/GFlop in 2011 vs $15M in 1984: <http://en.wikipedia.org/wiki/FLOPS> .
If you want to squeeze the most out of your (rented) hardware it is also becoming increasingly important to be able to utilize the full power of multicore (see <http://en.wikipedia.org/wiki/Moo..>. )
Note: this topic is not part of a standard Machine Learning track but you can probably find courses such as Distributed Systems or Parallel Programming in your CS/EE catalog. See distributed computing resources, a systems course at UIUC, key works, and for starters: Introduction to Computer Networking.
After studying the basics of networking and distributed systems, I’d focus on distributed databases, which will soon become ubiquitous with the data deluge and hitting the limits of vertical scaling. See key works, research trends and for starters: Introduction to relational databases and Introduction to distributed databases (HBase in Action).

3) Learn about statistical analysis

Start learning statistics by coding with R: What are essential references for R? and experiment with real-world data: Where can I find large datasets open to the public?
Cosma Shalizi compiled some great materials on computational statistics, check out his lecture slides, and also What are some good resources for learning about statistical analysis?
I’ve found that learning statistics in a particular domain (e.g. Natural Language Processing) is much more enjoyable than taking Stats 101. My personal recommendation is the course by Michael Collins at Columbia (also available on Coursera).
You can also choose a field where the use of quantitative statistics and causality principles [7] is inevitable, say molecular biology [8], or a fun sub-field such as cancer research [9], or even narrower domain, e.g. genetic analysis of tumor angiogenesis [10] and try answering important questions in that particular field, learning what you need in the process.

4) Learn about optimization

This subject is essentially prerequisite to understanding many Machine Learning and Signal Processing algorithms, besides being important in its own right.
Start with Stephen P. Boyd’s video lectures and also What are some good resources to learn about optimization?

5) Learn about machine learning

Before you get to think about algorithms look carefully at the data and select features that help you filter signal from noise. See this talk by Jeremy Howard : At Kaggle, It’s a Disadvantage To Know Too Much
Also see How do I learn machine learning? and What are some introductory resources for learning about large scale machine learning? Why?
Statistics vs. machine learning, fight!: <http://brenocon.com/blog/2008/12..>.
You can structure your study program according to online course catalogs
and curricula of MIT, Stanford or other top schools. Experiment with
data a lot, hack some code, ask questions, talk to good people, set up a web crawler in your garage: The Anatomy of a Search Engine
You can join one of these startups and learn by doing: What startups are hiring engineers with strengths in machine learning/NLP?
The alternative (and rather expensive) option is to enroll in a CS
program/Machine Learning track if you prefer studying in a formal
setting. See: What makes a Master’s in Computer Science (MS CS) degree worth it and why?
Try to avoid overspecialization. The breadth-first approach often works best when learning a new field and dealing with hard problems, see the Second voyage of HMS Beagle on the adventures of an ingenious young data miner.

6) Learn about information retrieval

Machine learning Is not as cool as it sounds: <http://teddziuba.com/2008/05/mac..>.
What are some good resources to begin Information Retrieval training and why are these preferred over others?

7) Learn about signal detection and estimation

This is a classic topic and “data science” par excellence in my opinion.
Some of these methods were used to guide the Apollo mission or detect
enemy submarines and are still in active use in many fields. This is
often part of the EE curriculum.
Good references are Robert F. Stengel’ lecture slides on optimal control and estimation: Rob Stengel’s Home Page, Alan V. Oppenheim’s Signals and Systems. and What are some good resources for learning about signal estimation and detection? A good topic to focus on first is Kalman filter, widely used for Time series forecasting.
Talking about data, you probably want to know something about information: its transmission, compression and filtering signal from noise. The methods developed by communication engineers in the 60s (such as Viterbi decoder, now used in about a billion cellphones, or Gabor wavelet widely used in Iris recognition) are applicable to a surprising variety of data analysis tasks, from Statistical machine translation to understanding the organization and function of molecular networks. A good resource for starters is Information Theory and Reliable Communication: Robert G. Gallager: 9780471290483: Amazon.com: Books. Also What are some good resources for learning about information theory?

8) Master algorithms and data structures

What are the most learner-friendly resources for learning about algorithms?

9) Practice

Getting In Shape For The Sport Of Data Science
Carpentry: <http://software-carpentry.org/>
What are some good toy problems (can be done over a weekend by a single coder) in data science? I’m studying machine learning and statistics, and looking for something socially relevant using publicly available datasets/APIs.
Tools: What are some of the best data analysis tools?
Where can I find large datasets open to the public?

If you do decide to go for a Masters degree:

10) Study Engineering

I’d go for CS with a focus on either IR or Machine Learning or a combination of both and take some systems courses along the way. As a “data scientist” you will have to write a ton of code and probably develop distributed algorithms/systems to process massive amounts of data. MS in Statistics will teach you how to do modeling and regression analysis etc, not how to build systems, I think the latter is more urgently needed these days as the old tools become obsolete with the avalanche of data. There is a shortage of engineers who can build a data mining system from the ground up. You can pick up statistics from books and experiments with R (see item 3 above) or take some statistics classes as a part of your CS studies.

Good luck.

[1] <http://mahout.apache.org/>
[2] <http://www.netlib.org/lapack/>
[3] <http://www.netlib.org/eispack/>
[4] <http://math.nist.gov/javanumeric..>.
[5] <http://www.netlib.org/scalapack/>
[6] <http://labs.google.com/papers/ma..>.
[7] Amazon.com: Causality: Models, Reasoning and Inference (9780521895606): Judea Pearl: Books
[8] Introduction to Biology , MIT 7.012 video lectures
[9] Hanahan & Weinberg, The Hallmarks of Cancer, Next Generation: Page on Wisc
[10] The chaotic organization of tumor-associated vasculature, from The Biology of Cancer: Robert A. Weinberg: 9780815342205: Amazon.com: Books, p. 562

567.8k Views · 3,506 Upvotes · Answer requested by User and Jayaraj Periaswamy
Upvoted3.5kDownvote
Share
Viksit Gaur
Viksit Gaur
Excellent answer. Minor comment - I think Flume is a Cloudera project - is it based on something …
Promoted by Chartio
How is your startup doing? Get started with data analytics now.
Connect all your business data in one place. Try Chartio for free and get to new insights in minutes.
Sign up at chartio.com
William Chen
William Chen, Data Science Manager at Quora
Updated Apr 6 · Upvoted by Sravan Kumar, MS Data Science, Indiana University Bloomington and Joe Blitzstein, Professor in the Harvard Statistics Department
Here are some amazing and completely free resources online that you can use to teach yourself data science.

Besides this page, I would highly recommend the Official Quora Data Science FAQ as your comprehensive guide to data science! It includes resources similar to this one, as well as advice on preparing for data science interviews. Additionally, follow the Quora Data Science topic if you haven’t already to get updates on new questions and answers!

Step 1. Fulfill your prerequisites

Before you begin, you need Multivariable Calculus, Linear Algebra, and Python. If your math background is up to multivariable calculus and linear algebra, you’ll have enough background to understand almost all of the probability / statistics / machine learning for the job.

Multivariate Calculus: What are the best resources for mastering multivariable calculus?
Numerical Linear Algebra / Computational Linear Algebra / Matrix Algebra: Linear Algebra, Introduction to Linear Models and Matrix Algebra. Avoid linear algebra classes that are too theoretical, you need a linear algebra class that works with real matrices.
Multivariate calculus is useful for some parts of machine learning and a lot of probability. Linear / Matrix algebra is absolutely necessary for a lot of concepts in machine learning.

You also need some programming background to begin, preferably in Python. Most other things on this guide can be learned on the job (like random forests, pandas, A/B testing), but you can’t get away without knowing how to program!

Python is the most important language for a data scientist to learn. To learn to code, more about Python, and why Python is so important, check out

How do I learn to code?
How do I learn Python?
Why is Python a language of choice for data scientists?
Is Python the most important programming language to learn for aspiring data scientists and data miners?
R is the second most important language for a data scientist to learn. I’m saying this as someone with a statistics background and who went through undergrad mainly only using R. While R is powerful for dedicated statistical tasks, Python is more versatile as it will connect you more to production-level work.

If you’re currently in school, take statistics and computer science classes. Check out What classes should I take if I want to become a data scientist?

Step 2. Plug Yourself Into the Community

Check out Meetup to find some that interest you! Attend an interesting talk, learn about data science live, and meet data scientists and other aspirational data scientists. Start reading data science blogs and following influential data scientists:

What are the best, insightful blogs about data, including how businesses are using data?
What is your source of machine learning and data science news? Why?
What are some best data science accounts to follow on Twitter, Facebook, G+, and LinkedIn?
What are the best Twitter accounts about data?
Step 3. Setup and Learn to use your tools

Python

Install Python, iPython, and related libraries (guide)
How do I learn Python?
R

Install R and RStudio (It’s good to know both Python and R)
Learn R with swirl
Sublime Text

Install Sublime Text
What’s the best way to learn to use Sublime Text?
SQL

How do I learn SQL? What are some good online resources, like websites, blogs, or videos? (You can practice it using the sqlite package in Python)
Step 4. Learn Probability and Statistics

Be sure to go through a course that involves heavy application in R or Python. Knowing probability and statistics will only really be helpful if you can implement what you learn.

Python Application: Think Stats (free pdf) (Python focus)
R Applications: An Introduction to Statistical Learning (free pdf)(MOOC) (R focus)
Print out a copy of Probability Cheatsheet
Step 5. Complete Harvard’s Data Science Course

As of Fall 2015, the course is currently in its third year and strives to be as applicable and helpful as possible for students who are interested in becoming data scientists. An example of how is this happening is the introduction of Spark and SQL starting this year.

I’d recommend doing the labs and lectures from 2015 and the homeworks from 2013 (2015 homeworks are not available to the public, and the 2014 homeworks are written under a different instructor than the original instructors).

This course is developed in part by a fellow Quora user, Professor Joe Blitzstein. Here are all of the materials!

Intro to the class

What is it like to design a data science class? In particular, what was it like to design Harvard’s new data science class, taught by professors Joe Blitzstein and Hanspeter Pfister?
What is it like to take CS 109/Statistics 121 (Data Science) at Harvard?
Course Materials

Class main page: CS109 Data Science
Lectures, Slides, and Labs: Class Material
Assignments

Intro to Python, Numpy, Matplotlib (Homework 0) (Solutions)
Poll Aggregation, Web Scraping, Plotting, Model Evaluation, and Forecasting (Homework 1) (Solutions)
Data Prediction, Manipulation, and Evaluation (Homework 2) (Solutions)
Predictive Modeling, Model Calibration, Sentiment Analysis (Homework 3) (Solutions)
Recommendation Engines, Using Mapreduce (Homework 4) (Solutions)
Network Visualization and Analysis (Homework 5) (Solutions)
Labs

(these are the 2013 labs. For the 2015 labs, check out Class Material)

Lab 2: Web Scraping
Lab 3: EDA, Pandas, Matplotlib
Lab 4: Scikit-Learn, Regression, PCA
Lab 5: Bias, Variance, Cross-Validation
Lab 6: Bayes, Linear Regression, and Metropolis Sampling
Lab 7: Gibbs Sampling
Lab 8: MapReduce
Lab 9: Networks
Lab 10: Support Vector Machines
Step 6. Do all of Kaggle’s Getting Started and Playground Competitions

I would NOT recommend doing any of the prize-money competitions. They usually have datasets that are too large, complicated, or annoying, and are not good for learning. The competitions are available at Competitions | Kaggle

Start by learning scikit-learn, playing around, reading through tutorials and forums on the competitions that you’re doing. Next, play around some more and check out the tutorials for Titanic: Machine Learning from Disaster for a binary classification task (with categorical variables, missing values, etc.)

Afterwards, try some multi-class classification with Forest Cover Type Prediction. Now, try a regression task House Prices: Advanced Regression Techniques. Try out some natural language processing with Quora Question Pairs | Kaggle. Finally, try out any of the other knowledge-based competitions that interest you!

Step 7. Learn Some Data Science Electives

Data science is an incredibly large and interdisciplinary field, and different jobs will require different skillsets. Here are some of the more common ones:

Product Metrics will teach you about what companies track, what metrics they find important, and how companies measure their success: The 27 Metrics in Pinterest’s Internal Growth Dashboard
Machine Learning How do I learn machine learning? This is an extremely rich area with massive amounts of potential, and likely the “sexiest” area of data science today. Andrew Ng’s Machine Learning course on Coursera is one of the most popular MOOCs, and a great way to start! Andrew Ng’s Machine Learning MOOC
A/B Testing is incredibly important to help inform product decisions for consumer applications. Learn more about A/B testing here: How do I learn about A/B testing?
Visualization - I would recommend picking up ggplot2 in R to make simple yet beautiful graphics and just browsing DataIsBeautiful • /r/dataisbeautiful and FlowingData for ideas and inspiration.
User Behavior - This set of blogs posts looks useful and interesting - This Explains Everything “ User Behavior
Feature Engineering - Check out What are some best practices in Feature Engineering? and this great example: <http://nbviewer.ipython.org/gith..>.
Big Data Technologies - These are tools and frameworks developed specifically to deal with massive amounts of data. How do I learn big data technologies?
Optimization will help you with understanding statistics and machine learning: Convex Optimization - Boyd and Vandenberghe
Natural Language Processing - This is the practice of turning text data into numerical data whilst still preserving the “meaning”. Learning this will let you analyze new, exciting forms of data. How do I learn Natural Language Processing (NLP)?
Time Series Analysis - How do I learn about time series analysis?
Step 8. Do a Capstone Product / Side Project

Use your new data science and software engineering skills to build something that will make other people say wow! This can be a website, new way of looking at a dataset, cool visualization, or anything!

What are some good toy problems (can be done over a weekend by a single coder) in data science? I’m studying machine learning and statistics, and looking for something socially relevant using publicly available datasets/APIs.
How can I start building a recommendation engine? Where can I find an interesting data set? What tools/technologies/algorithms are best to build the engine with? How do I check the effectiveness of recommendations?
What are some ideas for a quick weekend Python project? I am looking to gain some experience.
What is a good measure of the influence of a Twitter user?
Where can I find large datasets open to the public?
What are some good algorithms for a prioritized inbox?
What are some good data science projects?
Create public github repositories, make a blog, and post your work, side projects, Kaggle solutions, insights, and thoughts! This helps you gain visibility, build a portfolio for your resume, and connect with other people working on the same tasks.

Step 9. Get a Data Science Internship or Job

How do I prepare for a data scientist interview?
How should I prepare for statistics questions for a data science interview
What kind of A/B testing questions should I expect in a data scientist interview and how should I prepare for such questions?
What companies have data science internships for undergraduates?
What are some tips to choose whether I want to apply for a Data Science or Software Engineering internship?
When is the best time to apply for data science summer internships?
Check out The Official Quora Data Science FAQ for more discussion on internships, jobs, and data science interview processes! The data science FAQ also links to more specific versions of this question, like How do I become a data scientist without a PhD? or the counterpart, How do I become a data scientist as a PhD student?

Step 10. Share your Wisdom Back with the Data Science Community

If you’ve made it this far, congratulations on becoming a data scientist! I’d encourage you to share your knowledge and what you’ve learned back with the data science community. Data Science as a nascent field depends on knowledge-sharing!

Think like a Data Scientist

In addition to the concrete steps I listed above to develop the skill set of a data scientist, I include seven challenges below so you can learn to think like a data scientist and develop the right attitude to become one.

(1) Satiate your curiosity through data

As a data scientist you write your own questions and answers. Data scientists are naturally curious about the data that they’re looking at, and are creative with ways to approach and solve whatever problem needs to be solved.

Much of data science is not the analysis itself, but discovering an interesting question and figuring out how to answer it.

Here are two great examples:

Hilary: the most poisoned baby name in US history
A Look at Fire Response Data
Challenge: Think of a problem or topic you’re interested in and answer it with data!

(2) Read news with a skeptical eye

Much of the contribution of a data scientist (and why it’s really hard to replace a data scientist with a machine), is that a data scientist will tell you what’s important and what’s spurious. This persistent skepticism is healthy in all sciences, and is especially necessarily in a fast-paced environment where it’s too easy to let a spurious result be misinterpreted.

You can adopt this mindset yourself by reading news with a critical eye. Many news articles have inherently flawed main premises. Try these two articles. Sample answers are available in the comments.

Easier: You Love Your iPhone. Literally.

Harder: Who predicted Russia’s military intervention?

Challenge: Do this every day when you encounter a news article. Comment on the article and point out the flaws.

(3) See data as a tool to improve consumer products

Visit a consumer internet product (probably that you know doesn’t do extensive A/B testing already), and then think about their main funnel. Do they have a checkout funnel? Do they have a signup funnel? Do they have a virility mechanism? Do they have an engagement funnel?

Go through the funnel multiple times and hypothesize about different ways it could do better to increase a core metric (conversion rate, shares, signups, etc.). Design an experiment to verify if your suggested change can actually change the core metric.

Challenge: Share it with the feedback email for the consumer internet site!

(4) Think like a Bayesian

To think like a Bayesian, avoid the Base rate fallacy. This means to form new beliefs you must incorporate both newly observed information AND prior information formed through intuition and experience.

Checking your dashboard, user engagement numbers are significantly down today. Which of the following is most likely?

1. Users are suddenly less engaged
2. Feature of site broke
3. Logging feature broke

Even though explanation #1 completely explains the drop, #2 and #3 should be more likely because they have a much higher prior probability.

You’re in senior management at Tesla, and five of Tesla’s Model S’s have caught fire in the last five months. Which is more likely?

1. Manufacturing quality has decreased and Teslas should now be deemed unsafe.
2. Safety has not changed and fires in Tesla Model S’s are still much rarer than their counterparts in gasoline cars.

While #1 is an easy explanation (and great for media coverage), your prior should be strong on #2 because of your regular quality testing. However, you should still be seeking information that can update your beliefs on #1 versus #2 (and still find ways to improve safety). Question for thought: what information should you seek?

Challenge: Identify the last time you committed the Base Rate Fallacy. Avoid committing the fallacy from now on.

(5) Know the limitations of your tools

“Knowledge is knowing that a tomato is a fruit, wisdom is not putting it in a fruit salad.” - Miles Kington

Knowledge is knowing how to perform a ordinary linear regression, wisdom is realizing how rare it applies cleanly in practice.

Knowledge is knowing five different variations of K-means clustering, wisdom is realizing how rarely actual data can be cleanly clustered, and how poorly K-means clustering can work with too many features.

Knowledge is knowing a vast range of sophisticated techniques, but wisdom is being able to choose the one that will provide the most amount of impact for the company in a reasonable amount of time.

You may develop a vast range of tools while you go through your Coursera or EdX courses, but your toolbox is not useful until you know which tools to use.

Challenge: Apply several tools to a real dataset and discover the tradeoffs and limitations of each tools. Which tools worked best, and can you figure out why?

(6) Teach a complicated concept

How does Richard Feynman distinguish which concepts he understands and which concepts he doesn’t?

Feynman was a truly great teacher. He prided himself on being able to devise ways to explain even the most profound ideas to beginning students. Once, I said to him, “Dick, explain to me, so that I can understand it, why spin one-half particles obey Fermi-Dirac statistics.” Sizing up his audience perfectly, Feynman said, “I’ll prepare a freshman lecture on it.” But he came back a few days later to say, “I couldn’t do it. I couldn’t reduce it to the freshman level. That means we don’t really understand it.” - David L. Goodstein, Feynman’s Lost Lecture: The Motion of Planets Around the Sun

What distinguished Richard Feynman was his ability to distill complex concepts into comprehendible ideas. Similarly, what distinguishes top data scientists is their ability to cogently share their ideas and explain their analyses.

Check out <https://www.quora.com/Edwin-Chen..>. for examples of cogently-explained technical concepts.

Challenge: Teach a technical concept to a friend or on a public forum, like Quora or YouTube.

(7) Convince others about what’s important

Perhaps even more important than a data scientist’s ability to explain their analysis is their ability to communicate the value and potential impact of the actionable insights.

Certain tasks of data science will be commoditized as data science tools become better and better. New tools will make obsolete certain tasks such as writing dashboards, unnecessary data wrangling, and even specific kinds of predictive modeling.

However, the need for a data scientist to extract out and communicate what’s important will never be made obsolete. With increasing amounts of data and potential insights, companies will always need data scientists (or people in data science-like roles), to triage all that can be done and prioritize tasks based on impact.

The data scientist’s role in the company is the serve as the ambassador between the data and the company. The success of a data scientist is measured by how well he/she can tell a story and make an impact. Every other skill is amplified by this ability.

Challenge: Tell a story with statistics. Communicate the important findings in a dataset. Make a convincing presentation that your audience cares about.

Good luck and best wishes on your journey to becoming a data scientist! For more resources check out Quora’s official Quora Data Science FAQ
