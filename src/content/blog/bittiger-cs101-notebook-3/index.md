---
title: "Bittiger cs101 notebook 2 - linux and file system"
description: "connect by points and write by order"
date: "2016-11-05"
---

# need for a file system

- hardware
- file

  - size
  - type
  - authorization
  - read and write time
- operations

# common file system:

- FAT(File Allocation Table)  
  connect by points and write by order
- ext2(second extended file system)  
  - supernode | file sysem descrip | inode bitmap | block bitmap | inode | block
  - use hashmap (inode) record file content  
    - inode -> meta Data
    - block -> file content
  - use bitmap record whether it is empty
  - fixed size block: 1k, 2k, 4k
  - fixed size inode: 128byte
  - one inode has at least one block
  - use super node to record file system meta Data
    - the number of inode and block
    - the stat of bitmaps
    - the size of inode and block
    - start point of each part
  - larger size: indirect inode
- ext3 log file system: in order to check errors efficiently

# linux

- group  
  - owner
  - owners’ group
  - others
- drwxr-xr-x:  
  - d refers dictonary; - refers file;
  - r readable : 4
  - w writable : 2
  - x executable : 1
  - r-x : 4 + 1 = 5
- commands:  
  - find: find Desktop -name “*.*”
  - grep: grep “pattern” filename
  - pipe: find . -name “\*.java” | xargs grep “public”  
    (xargs: pass previous contect as argus for current command)
  - awk ‘{x+=$2+$3;a[NR]=$2+$3}END{y=x/NR;for(i in a){if(a[i] < y) z++} print z}’ table.txt
