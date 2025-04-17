---
title: 用户头像
order: 0
group:
  title: 基础组件
  order: 0
---

## 1. 使用方式

:::code-group

```js [默认]
import {Avatar} from '@kernelstudio/components'
```

```js [单个导入]
import Avatar from '@kernelstudio/components/es/avatar'
```

:::

## 2. 属性说明

| 名称     | 说明           | 类型                                                                    | 必须    | 默认值 |  版本   |
|:-------|:-------------|:----------------------------------------------------------------------|:------|:----|:-----:|
| size   | 大小           | number \| large \| small \| default \| { xs: number, sm: number, ...} | false | 30  | 3.6.9 |
| shape  | 像的形状         | circle \| square                                                      | false | -   | 3.6.9 |
| avatar | 头像图片         | String                                                                | false | -   | 3.6.9 |
| text   | 头像图片不存在时的占位符 | String                                                                | false | -   | 3.6.9 |
