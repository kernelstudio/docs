---
title: 最大文件打开数
---

## 1. 查看当前值

```shell
ulimit -n
```

## 2. 临时修改

```shell
ulimit -n 65535
```

## 3. 永久修改

编辑 `vim /etc/security/limits.conf` 修改为如下内容

```text
root soft nofile 1000000
root hard nofile 1000000
* soft nofile 1000000
* hard nofile 1000000
```