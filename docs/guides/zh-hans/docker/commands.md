---
title: Docker常用命令
---

## 1. 导入/导出镜像

:::code-group

```shell [导入镜像]
# 导出单个镜像 
docker save -o nginx.tar mirrors.kernelstudio.com/library/nginx:latest
  # 导入单个镜像
docker load -i nginx.tar
```

```shell [导出镜像]
# 导出所有镜像
docker save $(docker images --format "{{.Repository}}:{{.Tag}}") -o all_images.tar
# 导入所有镜像
docker load -i all_images.tar
```

:::

## 2. 清理本地缓存

如下命令执行前一定要确认清除!

```shell
# 清除所有未运行的容器
docker container prune  
# 清除所有镜像
docker image prune
# 清除所有的卷
docker volume prune
# 清除所有缓存
docker system prune -a
```
