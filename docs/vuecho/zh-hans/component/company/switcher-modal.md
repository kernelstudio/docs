---
title: 单位切换弹框
group:
  title: 基础组件
  order: 2
---

## 1. 使用方式

:::code-group

```js [默认]
import {CompanySwitcherModal} from '@kernelstudio/components'
```

```js [单个导入]
import CompanySwitcherModal from '@kernelstudio/components/es/company'
```

:::

## 2. 属性说明

| 名称          | 说明   | 类型      | 必须    | 默认值                                            | 版本    |
|:------------|:-----|:--------|:------|:-----------------------------------------------|:------|
| title       | 标题   | String  | false | 切换单位                                           | 3.6.9 |
| alert       | 提示消息 | String  | false | 切换单位之前请保存好当前所有标签页面的数据,以免切换成功后刷新整个页面造成数据丢失或者错乱! | 3.6.9 |
| visible     | 是否可见 | String  | true  | false                                          | 3.6.9 |
| placeholder | 占位符  | Boolean | false | 请选择需要切换的单位部门                                   | 3.6.9 |

