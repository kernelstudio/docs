---
title: 单位级联选择
order: 0
group:
  title: 基础组件
  order: 0
---

## 1. 使用方式

:::code-group

```js [默认]
import {CompanySascader} from '@kernelstudio/components'
```

```js [单个导入]
import CompanySascader from '@kernelstudio/components/es/company'
```

:::

## 2. 属性说明

| 名称               | 说明                       | 类型                         | 必须    | 默认值      |  版本   |
|:-----------------|:-------------------------|:---------------------------|:------|:---------|:-----:|
| selected         | 选中的值                     | String \| Array\[String\]  | false | -        | 3.6.9 |
| trigger          | 触发方式                     | click \| hover             | false | click    | 3.6.9 |
| clearable        | 是否可清除                    | Boolean                    | false | true     | 3.6.9 |
| changeOnSelect   | 为true时，点选选项值都会发生变化,单选时生效 | Boolean                    | false | -        | 3.6.9 |
| disabled         | 是否禁用                     | Boolean                    | false | -        | 3.6.9 |
| placeholder      | 占位符                      | String                     | false | 请选择部门    | 3.6.9 |
| separator        | 标签值分隔符                   | String                     | false | /        | 3.6.9 |
| refresh          | 是否刷新                     | Boolean                    | false | /        | 3.6.9 |
| size             | 大小                       | large \| default  \| small | false | -        | 3.6.9 |
| onlyShowLast     | 只显示最后一级标签                | Boolean                    | false | false    | 3.6.9 |
| disableShowFirst | 不显示一级标签                  | Boolean                    | false | false    | 3.6.9 |
| skipLastValue    | 排除掉最后一级的值                | Boolean                    | false | false    | 3.6.9 |
| labelKey         | 标签key                    | String                     | false | name     | 3.6.9 |
| primaryKey       | 主键key                    | String,可选范围为code,uuid      | false | code     | 3.6.9 |
| childrenKey      | 子节点key                   | String                     | false | children | 3.6.9 |

## 3. 事件说明

### 3.1 选中后触发

| 名称     | 回调参数                                                           |  版本   |
|:-------|:---------------------------------------------------------------|:-----:|
| select | @select=(value, node, valueString, valuesArray, nodes) => void | 3.6.9 |

回调参数说明:

| 名称          | 说明                     | 类型              |  版本   |
|:------------|:-----------------------|:----------------|:-----:|
| value       | primaryKey 的值,选中的最末级的值 | String          | 3.6.9 |
| node        | 选中的最末级部门整个对象的值         | Object          | 3.6.9 |
| valueString | 带层级的字符串值,多个以逗号分隔       | String          | 3.6.9 |
| valuesArray | 带层级的值数组                | Array\[String\] | 3.6.9 |
| nodes       | 选中的所有层级的对象值            | Array\[Object\] | 3.6.9 |