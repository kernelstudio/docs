---
title: 单位树形面板
order: 0
group:
  title: 基础组件
  order: 1
---

## 1. 使用方式

:::code-group

```js [默认]
import {CompanyTreePanel} from '@kernelstudio/components'
```

```js [单个导入]
import CompanyTreePanel from '@kernelstudio/components/es/company'
```

:::

## 2. 属性说明

| 名称                 | 说明                                                     | 类型                         | 必须    | 默认值      |  版本   |
|:-------------------|:-------------------------------------------------------|:---------------------------|:------|:---------|:-----:|
| selected           | 选中的值                                                   | String \| Array\[String\]  | false | -        | 3.6.9 |
| size               | 大小                                                     | large \| default  \| small | false | -        | 3.6.9 |
| maxHeight          | 最大高度                                                   | String                     | false | 240px    | 3.6.9 |
| maxLength          | 标签最大长度,超过则进行截取                                         | Number                     | false | 15       | 3.6.9 |
| substringLabel     | 是否对标签进行截取                                              | Boolean                    | false | true     | 3.6.9 |
| filter             | 搜索过滤字段名称                                               | String                     | false | name     | 3.6.9 |
| multiple           | 是否为多选                                                  | Boolean                    | false | false    | 3.6.9 |
| treeLine           | 显示树形线                                                  | Boolean                    | false | false    | 3.6.9 |
| showLeafIcon       | 显示子节点图标                                                | Boolean                    | false | false    | 3.6.9 |
| placeholder        | 显示选择框                                                  | Boolean                    | false | true     | 3.6.9 |
| searchable         | 可搜索                                                    | Boolean                    | false | true     | 3.6.9 |
| defaultExpandAll   | 默认展开所有节点                                               | Boolean                    | false | false    | 3.6.9 |
| expandOneSameLevel | 同一级的节点，每次只能展开一个                                        | Boolean                    | false | true     | 3.6.9 |
| autoExpandParent   | 是否自动展开父节点                                              | Boolean                    | false | false    | 3.6.9 |
| autoCheckOnSelect  | 如果开启了 checkable 则点击后自动选中                               | Boolean                    | false | true     | 3.6.9 |
| checkable          | 显示选择框                                                  | Boolean                    | false | false    | 3.6.9 |
| checked            | checkbox选中的数据                                          | Array \| String            | false | false    | 3.6.9 |
| checkStrictly      | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | Boolean                    | false | false    | 3.6.9 |
| searchFieldWidth   | 搜索框宽度                                                  | String \| Number           | false | -        | 3.6.9 |
| height             | 设置虚拟滚动容器高度，设置后内部节点不再支持横向滚动                             | String \| Number           | false | -        | 3.6.9 |
| disabled           | 是否禁用                                                   | Boolean                    | false | false    | 3.6.9 |
| refresh            | 是否刷新                                                   | Boolean                    | false | false    | 3.6.9 |
| primaryKey         | 主键key                                                  | String,可选范围为code,uuid      | false | code     | 3.6.9 |
| childrenKey        | 子节点key                                                 | String                     | false | children | 3.6.9 |
| params             | 自定义附加参数                                                | Any                        | false | -        | 3.6.9 |

## 3. 事件说明

### 3.1 选中后触发

| 名称     | 回调参数                                               |  版本   |
|:-------|:---------------------------------------------------|:-----:|
| select | @select=(keys, names, nodes, maps, params) => void | 3.6.9 |

回调参数说明:

| 名称     | 说明                        | 类型                 |  版本   |
|:-------|:--------------------------|:-------------------|:-----:|
| keys   | primaryKey 的值             | String             | 3.6.9 |
| names  | labelKey 的值               | String             | 3.6.9 |
| nodes  | 选中的整个对象的值                 | Array\[Object\]    | 3.6.9 |
| maps   | primaryKey和labelKey值的对应关系 | Map<String,String> | 3.6.9 |
| params | 自定义附加参数                   | Any                | 3.6.9 |

### 3.2 单选框选中后触发

| 名称    | 回调参数                                              |  版本   |
|:------|:--------------------------------------------------|:-----:|
| check | @check=(keys, names, nodes, maps, params) => void | 3.6.9 |

回调参数说明:

| 名称     | 说明                        | 类型                 |  版本   |
|:-------|:--------------------------|:-------------------|:-----:|
| keys   | primaryKey 的值             | String             | 3.6.9 |
| names  | labelKey 的值               | String             | 3.6.9 |
| nodes  | 选中的整个对象的值                 | Array\[Object\]    | 3.6.9 |
| maps   | primaryKey和labelKey值的对应关系 | Map<String,String> | 3.6.9 |
| params | 自定义附加参数                   | Any                | 3.6.9 |