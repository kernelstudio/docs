---
title: LVM创建/扩容
---

:::warning{title=特别说明}
文中的`/dev/sdb`,`/dev/sdb1`磁盘分区一定要以实际操作系统的磁盘分区名称为准,操作之前一定要确认清楚!!!
:::

## 1. 创建 LVM

### 1.1 创建物理卷

格式说明 `pvcreate 硬盘或分区设备`

```shell
# 显示块设备
lsblk  
# 创建pv
pvcreate /dev/sdb
# 显示所有pv的详细信息
pvdisplay   
# 扫描已存在的pv设备
pvscan 
```

### 1.2 创建 vg 卷组

格式说明: `vgcreate 卷组名pv设备`

```shell
# 将sdb组成 vgdata0 卷组, 多个磁盘以空格分开
vgcreate vgdata0 /dev/sdb 
# 显示vg状态    
vgs
# 显示所有vg的详细信息  
vgdisplay
# 扫描已存在的vg设备 
vgscan
```

### 1.3 创建 lv 并挂载

创建 lv 格式说明 : `lvcreate -L 容量 -n lv 名称 卷组名称`

```shell
# 分配所有空间
lvcreate -l +100%FREE  -n lvdata0 vgdata0  
# 显示lv状态
lvs 
# 显示所有lv的详细信息
lvdisplay   
# 格式化,一定要确认清除!!!
mkfs.ext4 /dev/vgdata0/lvdata0 
# 创建目录  
mkdir -pv  /data0   
# 手动挂载    
mount  /dev/vgdata0/lvdata0 /data0
```

## 2. LVM 扩容

### 2.1 创建分区

```shell
fdisk /dev/sdb
```

### 2.2 创建物理卷

```shell
pvcreate /dev/sdb1
```

### 2.3 查看卷组名称及使用情况

```shell
vgdisplay
```

### 2.4 将物理卷扩展到卷组

```shell
# (此处vgdata0是卷组名称)
vgextend vgdata0 /dev/sdb1   
```

### 2.5 扩展空闲空间

将卷组中空闲空间扩展到 `/dev/vgdata0/lvdata0`

```shell
lvextend -l +100%FREE /dev/vgdata0/lvdata0
```

### 2.6 刷新文件系统是扩容生效

```shell
resize2fs /dev/vgdata0/lvdata0
```

## 3. 自动挂载

将创建的分区/LVM写入系统配置随系统启动时自动挂载, `vim /etc/fstab` #添加如下内容

```text
/dev/vgdata0/lvdata0    /data0/    ext4    defaults    0    2
```

