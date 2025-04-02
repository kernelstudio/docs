---
title: 中文语言包/字体
createTime: 2025/12/03 16:05:45
permalink: /maintenance/linux/chinese-language.html
tags:
  - Linux
  - ubuntu
  - 中文语言包
  - 中文字体
---

## 1. 中文语言包

### 1.1 安装

:::code-group

```shell [Ubuntu]
apt-get install language-pack-zh-hans
```

:::

输入命令 `locale -a` 查看是否添加了 `zh_CN.utf8`

### 1.2 修改配置文件

`vim /etc/default/locale` 修改成以下内容：

```text
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh:en_US:en"
```

### 1.3 刷新缓存

```shell
locale-gen zh_CN.UTF-8
```

## 2. 中文字体

### 2.1 安装预装字体

:::code-group

```shell [Ubuntu]
apt-get -y install fontconfig xfonts-utils
```

:::


### 2.2 复制字体

```shell
# 查看已有字体
fc-list 
# 查看中文字体
fc-list :lang=zh 
mkdir -p /usr/share/fonts/windows
```

将windows操作系统中 `C:\Windows\Fonts` 下的字体文件复制到 Linux 系统的 `/usr/share/fonts/windows` 中

```shell
cd /usr/share/fonts/windows
 #这种字体是安装不上的
rm -rf *.fon
mkfontscale
mkfontdir
fc-cache
```

执行命令 `fc-list :lang=zh` 查看中文字体是否安装成功.