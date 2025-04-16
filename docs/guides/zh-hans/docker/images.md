---
title: Docker常用镜像
---

## 1. JDK17

```shell
# 只包含jdk1.8,不包含tomcat
docker pull mirrors.kernelstudio.com/library/jdk17-zh

# 不包含文件转换服务,包含tomcat9
docker pull mirrors.kernelstudio.com/library/jdk17-tomcat10-zh

# 包含文件转换服务以及tomcat9
docker pull mirrors.kernelstudio.com/library/jdk17-tomcat10-liboffice
```

## 2. JDK1.8

```shell
# 只包含jdk1.8,不包含tomcat
docker pull mirrors.kernelstudio.com/library/jdk1.8-zh

# 不包含文件转换服务,包含tomcat9
docker pull mirrors.kernelstudio.com/library/jdk1.8-tomcat9-zh

# 包含文件转换服务以及tomcat9
docker pull mirrors.kernelstudio.com/library/jdk1.8-tomcat9-liboffice
```


## 3. redis

```shell
docker pull mirrors.kernelstudio.com/library/redis
```

## 4. mysql

```shell
# mysql 5.7 镜像
docker pull mirrors.kernelstudio.com/library/mysql-5.7

# mysql 8.0 镜像, 根据实际情况选择
docker pull mirrors.kernelstudio.com/library/mysql-8.0
```

## 5. nginx

```shell

# nginx 镜像
docker pull mirrors.kernelstudio.com/library/nginx

```

## 6. vsftpd

```shell
# vsftpd 镜像
docker pull mirrors.kernelstudio.com/library/vsftpd
```