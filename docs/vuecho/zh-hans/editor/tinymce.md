---
title: TinyMCE编辑器
order: 1
group:
  title: 编辑器
  order: 0
---

## 1. 安装

:::code-group

```shell [npm]
npm install @kernelstudio/tinymce
```

```shell [yarn]
yarn add @kernelstudio/tinymce
```

```shell [pnpm]
pnpm add @kernelstudio/tinymce
```

:::

## 2. 使用方式

```vue:raw

<template>
  <tinymce-editor :content="editorContent" @change="handleChangeEditorContent"/>
</template>

<script>
  import {ref} from 'vue'
  import TinymceEditor from '@kernelstudio/tinymce'

  export default {
    components: {
      TinymceEditor
    },
    setup(props, {emit}) {
      const editorContent = ref('初始化内容')
      // 内容变更后的回调
      const handleChangeEditorContent = (content) => {
        editorContent.value = content
      }
      return {
        editorContent,
        handleChangeEditorContent,
      }
    }
  }
</script>

```

## 3. 属性说明

| 名称       | 说明        | 类型               | 必须    | 默认值   |  版本   |
|:---------|:----------|:-----------------|:------|:------|:-----:|
| content  | 编辑器内容     | String           | false | -     | 3.6.9 |
| height   | 编辑器高度     | String \| Number | false | 600   | 3.6.9 |
| inline   | 是否为内联编辑模式 | Boolean          | false | false | 3.6.9 |
| readonly | 是否为只读     | Boolean          | false | false | 3.6.9 |
| config   | 自定义配置     | Object           | false | -     | 3.6.9 |
