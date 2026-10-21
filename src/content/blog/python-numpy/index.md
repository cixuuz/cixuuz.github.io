---
title: "Python Numpy"
description: "(no summary)"
date: "2017-08-21"
---

- 在 Numpy 中, 创建 2D Array 的默认方式是 “C-type” 以 row 为主在内存中排列, 而如果是 “Fortran” 的方式创建的, 就是以 column 为主在内存中排列.

  |  |  |
  | --- | --- |
  | ``` 1 2 ``` | ``` col_major = np.zeros((10,10), order='C')    # C-type row_major = np.zeros((10,10), order='F')    # Fortran ``` |
- copy慢 view快 same as `np.flatten()` return new copy 或者 `np.ravel()` return new view
