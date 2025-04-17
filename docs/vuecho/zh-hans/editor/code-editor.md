---
title: 代码编辑器
order: 1
group:
  title: 编辑器
  order: 0
---

## 1. 安装

:::code-group

```shell [npm]
npm install @kernelstudio/code-editor
```

```shell [yarn]
yarn add @kernelstudio/code-editor
```

```shell [pnpm]
pnpm add @kernelstudio/code-editor
```

:::

## 2. 使用方式

```vue

<template>

  <a-button type="primary" style="margin-bottom:15px;" :danger="readonly" @click="()=> readonly = !readonly">只读</a-button>

  <code-editor
      lang='js'
      height="10vh"
      :content='codeContent'
      :readonly="readonly"
      @change='(v)=> codeContent = v'
  />
</template>

<script>
  import {ref} from 'vue'
  import {CodeEditor} from '@kernelstudio/code-editor'
  import {Button} from 'ant-design-vue'

  export default {
    components: {
      CodeEditor,
      'AButton': Button,
    },
    props: {},
    setup(props, {emit}) {
      const codeContent = ref('var hello="hello world!";')
      const readonly = ref(false)
      return {
        codeContent,
        readonly,
      }
    }
  }
</script>
```

## 3. 属性说明

| 名称       | 说明    | 类型      | 必须    | 默认值   |  版本   |
|:---------|:------|:--------|:------|:------|:-----:|
| readonly | 是否为只读 | Boolean | false | false | 3.6.9 |
| height   | 编辑器高度 | String  | false | 20vh  | 3.6.9 |
| content  | 默认内容  | String  | false | -     | 3.6.9 |
| lang     | 语言    | String  | true  | -     | 3.6.9 |
| options  | 自定义选项 | Object  | false | -     | 3.6.9 |

## 4. 支持的语言

* `CssCodeEditor`   css
* `ElmCodeEditor`  el | elm
* `HtmlCodeEditor` html
* `JavaCodeEditor` java
* `JsCodeEditor` js
* `JsonCodeEditor` json
* `MdCodeEditor` md
* `MySqlCodeEditor` mysql
* `PythonCodeEditor` python
* `ShCodeEditor` sh
* `SqlCodeEditor` sql
* `TsCodeEditor` ts
* `TxtCodeEditor` txt
* `VueCodeEditor` vue
* `XmlCodeEditor` xml
* `YamlCodeEditor` yaml