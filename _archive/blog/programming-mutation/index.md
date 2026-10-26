---
title: "Mutation可能的问题"
description: "因为类型是Mutation的，所以reference和copy就有了区别。如果是reference，那么可能会暴露数据本身，遭到恶意修改，引发安全的问题。下面是一段Java代码，其中有一个 Mutation引起的的bug："
date: "2018-01-29"
draft: true
---

因为类型是Mutation的，所以reference和copy就有了区别。如果是reference，那么可能会暴露数据本身，遭到恶意修改，引发安全的问题。下面是一段Java代码，其中有一个 Mutation引起的的bug：

```
class ProtectedResource {
    private Resource theResource = ...;
    private String[] allowedUsers = ...;    
    public String[] getAllowedUsers() {
        return allowedUsers;
    }
    public String currentUser() {...}
    public void useTheResource() {
        for (String allowedUser : allowedUsers) {
            if (currentUser().equals(allowdUser)) {
                ... // access allowed: use it
                return;
            }
        }
        throw new IllegalAccessException();
    }
}
```

以上代码的bug发生在getAllowedUsers。因为返回的是对于allowedUsers的引用，那么就可以对数据进行修改，如下：

```
p.getAllowedUsers()[0] = p.currentUser;
p.useTheResource();
```

修改方法就是返回一个copy，但也要注意是否需要deep copy：

```
public String[] getAllowedUsers() {
    ... 
    return a copy of allowedUsers;
}
```

本文是 Programming Languages by UW 笔记的一部分。
[Java Mutation](https://www.coursera.org/learn/programming-languages/lecture/aOQ26/optional-java-mutation)
