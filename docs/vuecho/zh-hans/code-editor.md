---
title: 代码编辑器
group:
  title: 基础组件
  order: 3
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
  <code-editor
      lang='js'
      :content='codeContent'
      @change='(v)=> codeContent = v'
  />
</template>

<script>
  import {ref} from 'vue'
  import {CodeEditor} from '@kernelstudio/code-editor'

  export default {
    components: {
      CodeEditor
    },
    props: {},
    setup(props, {emit}) {
      const codeContent = ref('var hello="test javascript";')
      return {
        codeContent,
      }
    }
  }
</script>
```

## 2. 属性说明

| 名称     | 说明           | 类型                                                                    | 必须    | 默认值 |  版本   |
|:-------|:-------------|:----------------------------------------------------------------------|:------|:----|:-----:|
| size   | 大小           | number \| large \| small \| default \| { xs: number, sm: number, ...} | false | 30  | 3.6.9 |
| shape  | 像的形状         | circle \| square                                                      | false | -   | 3.6.9 |
| avatar | 头像图片         | String                                                                | false | -   | 3.6.9 |
| text   | 头像图片不存在时的占位符 | String                                                                | false | -   | 3.6.9 |
