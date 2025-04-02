---
title: Docker安装
---

## 1. 初始化

:::code-group

```shell [Ubuntu]
systemctl stop apparmor.service && systemctl disable apparmor.service
systemctl stop ufw && systemctl disable ufw

mkdir -p /data0/app /data0/var/storage /data0/logs/nginx /data0/local

apt-get update && apt-get upgrade -y
apt-get install lrzsz unzip wget vim curl

apt-get install docker.io -y
cp -rvp /var/lib/docker /data0/local
```

:::


## 2. 基础配置

编辑或者创建 `/etc/docker/daemon.json` 包含如下内容

```json
{
  "data-root" : "/data0/local/docker",
  "dns" : [
    "114.114.114.114",
    "8.8.8.8"
  ],
  "registry-mirrors": [
    "https://mirrors.kernelstudio.com"
  ],
  "insecure-registries": [
    "https://mirrors.kernelstudio.com"
  ]
}
```

重启docker服务 `systemctl restart docker.service`