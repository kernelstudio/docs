---
title: 通用兼容层
---

## 1. 引入方式

:::code-group

```xml [pom.xml]

<dependency>
    <artifactId>firecho-compatible</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 人大金仓数据库兼容

应用`pom.xml`中需要加入, 默认的兼容模式为`mysql`

```xml

<dependency>
    <groupId>cn.com.kingbase</groupId>
    <artifactId>kingbase8</artifactId>
</dependency>
```

对应的数据库链接示例:

```yaml
spring:
  datasource:
    # 人大金仓数据库
    url: jdbc:kingbase8://127.0.0.1:54321/firecho?characterEncoding=UTF-8&useUnicode=true&useSSL=false&nullCatalogMeansCurrent=true&serverTimezone=Asia/Shanghai
    username: system
    password: admin
    driver-class-name: com.kingbase8.Driver
```

如果使用`navicat`迁移的数据库,默认的自增长`id`之类的字段会出现问题,需要手工添加计数器,以下为示例SQL:

```sql
CREATE SEQUENCE ks_bpm_business_id_seq START WITH 65 INCREMENT BY 1;
ALERT
TABLE ks_bpm_business AFTER COLUMN id SET DEFAULT nextval('ks_bpm_business_id_seq');
```