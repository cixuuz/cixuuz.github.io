---
title: "Leetcode 239 Sliding Window Maximum"
description: "OK。终于仍不住要自己开贴记录一下刷题流程了。那么就从今天开始吧，希望今年能把所有的内容都更新起来。"
date: "2016-11-03"
---

OK。终于仍不住要自己开贴记录一下刷题流程了。那么就从今天开始吧，希望今年能把所有的内容都更新起来。

<https://leetcode.com/problems/sliding-window-maximum/>
做到这题是因为这是 Cloudera 的OA的一题。

## 先上题

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position Max

---

[1 3 -1] -3 5 3 6 7 3
1 [3 -1 -3] 5 3 6 7 3
1 3 [-1 -3 5] 3 6 7 5
1 3 -1 [-3 5 3] 6 7 5
1 3 -1 -3 [5 3 6] 7 6
1 3 -1 -3 5 [3 6 7] 7
Therefore, return the max sliding window as [3,3,5,5,6,7].

Note:
You may assume k is always valid, 1 ≤ k ≤ input array’s size.

Follow up:
Could you solve it in linear time?

Hint:

How about using a data structure such as deque (double-ended queue)?
The queue size need not be the same as the window’s size.
Remove redundant elements and the queue should store only elements that need to be considered.

## 思路

遍历数组nums，使用deque维护滑动窗口内有可能成为最大值元素的数组下标。
由于数组中的每一个元素至多只会入队、出队一次，因此均摊时间复杂度为O(n)。
记当前下标为i，则滑动窗口的有效下标范围为[i - (k - 1), i]。
若deque中的元素下标＜ i - (k - 1)，则将其从队头弹出，deque中的元素按照下标递增顺序从队尾入队。
这样就确保deque中的数组下标范围为[i - (k - 1), i]，满足滑动窗口的要求。
当下标i从队尾入队时，顺次弹出队列尾部不大于nums[i]的数组下标（这些被弹出的元素由于新元素的加入而变得没有意义）

deque的队头元素即为当前滑动窗口的最大值

## 代码

|  |  |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` class Solution(object):     def maxSlidingWindow(self, nums, k):         dq = []         res = []          for i, v in enumerate(nums):             while dq and nums[dq[-1]] < v:                 dq.pop()             dq.append(i)             if dq and dq[0] == i-k:                 dq.pop(0)             if i >= k - 1:                 res.append(nums[dq[0]])         return res  if __name__ == "__main__":     obj = Solution()     print(obj.maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) ``` |

注意：
1. 没有用deque是因为list的实现更快速，至少在leecode上是这样

## 参考

<http://www.cnblogs.com/grandyang/p/4656517.html>
<http://www.jiuzhang.com/solutions/sliding-window-maximum/>
<http://bookshadow.com/weblog/2015/07/18/leetcode-sliding-window-maximum/>
<https://leetcode.com/discuss/46578/java-o-n-solution-using-deque-with-explanation>
<https://segmentfault.com/a/1190000003903509>
