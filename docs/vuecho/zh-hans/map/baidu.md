---
title: 百度地图
order: 1
group:
  title: 地图
  order: 0
---

## 1. 安装

:::code-group

```shell [npm]
npm install @kernelstudio/map
```

```shell [yarn]
yarn add @kernelstudio/map
```

```shell [pnpm]
pnpm add @kernelstudio/map
```

:::

## 2. 使用方式

```vue

<template>
  <a-row :gutter="24">
    <a-col :span="18">
      <baidu-map
          ref="customMap"
          :longitude="longitude"
          :latitude="latitude"
          :zoomLevel="zoomLevel"
          height="70vh"
          @click="handleClick"
          @zoomed="(v)=> zoomLevel = v"
          @loaded="handleLoaded">

        <!-- 自定义头部区域 -->
        <template #header>
          <a-space style="margin-bottom:15px">
            <a-button type="primary" :loading="currentLocationLoading" @click="getCurrentLocation">定位当前位置</a-button>
            <a-button type="primary" @click="resetCenter">重置中心位置</a-button>
            <span>中心位置缩放级别:</span>
            <a-input-number :min="8" :max="60" v-model:value="zoomLevel" @change="zoomCenter"/>
          </a-space>
        </template>

        <!-- 自定义底部区域 -->
        <template #footer>
          <a-alert style="margin-top:15px">
            <template #message>
              自定义底部
            </template>
          </a-alert>
        </template>
      </baidu-map>
    </a-col>
    <a-col :span="6">
      <a-alert class="ks-mb-15" v-if="clickLocation || currentLocation">
        <template #message>
          <div v-if="clickLocation">
            点击位置
            <p>lat = {{ clickLocation.point.lat }}</p>
            <p>lng = {{ clickLocation.point.lng }}</p>
            <p>address = {{ clickLocation.address }}</p>
          </div>
          <div v-if="currentLocation">
            当前位置
            <p>lat = {{ currentLocation.point.lat }}</p>
            <p>lng = {{ currentLocation.point.lng }}</p>
            <p>address = {{ currentLocation.address }}</p>
          </div>
        </template>
      </a-alert>
    </a-col>
  </a-row>
</template>

<script>
  import {ref} from 'vue'
  import {BaiduMap} from '@kernelstudio/map'
  import {Alert, Button, Col, InputNumber, Row, Space} from 'ant-design-vue'

  export default {
    components: {
      'AInputNumber': InputNumber,
      'ARow': Row,
      'ACol': Col,
      'AAlert': Alert,
      'ASpace': Space,
      'AButton': Button,
      BaiduMap
    },
    setup() {

      const customMap = ref(null)
      const currentLocationLoading = ref(false)
      const currentLocation = ref(null)
      const map = ref(null)
      const zoomLevel = ref(8) // 缩放级别
      const longitude = ref(119.65928)
      const latitude = ref(32.824393)
      const clickLocation = ref(null)

      /**
       * 点击后调用
       * @param lng 精度
       * @param lat 纬度
       * @param location location信息
       * @param e 点击事件
       */
      const handleClick = (lng, lat, location, e) => {
        console.error('handleClick', lng, lat, location, e)
        clickLocation.value = location
      }

      /**
       * 地图加载完成后调用
       * @param mapper 地图实例
       * @param container 地图容器引用
       * @param elementId 地图元素ID
       */
      const handleLoaded = (mapper, container, elementId) => {
        map.value = mapper
        console.error('handleLoaded', mapper)
      }

      /**
       * 获取当前位置
       */
      const getCurrentLocation = () => {
        currentLocationLoading.value = true
        // 方式1
        // customMap.value.current().then(res => {
        //   currentLocation.value = res
        //   console.error(res)
        //   // 在地图上显示
        //   customMap.value.locate(res.point, 15)
        // }).finally(() => currentLocationLoading.value = false)

        // 方式2
        customMap.value.locateCurrent().then(location => {
          currentLocation.value = location
        }).finally(() => currentLocationLoading.value = false)
      }

      const resetCenter = () => {
        customMap.value.resetCenter()
      }

      const zoomCenter = (v) => {
        customMap.value.zoomCenter(v)
      }

      return {
        longitude,
        latitude,
        customMap,
        handleClick,
        handleLoaded,
        getCurrentLocation,
        currentLocation,
        currentLocationLoading,
        resetCenter,
        zoomLevel,
        zoomCenter,
        clickLocation,
      }
    }
  }
</script>
```

## 3. 属性说明

| 名称        | 说明       | 类型      | 必须    | 默认值              |  版本   |
|:----------|:---------|:--------|:------|:-----------------|:-----:|
| scriptId  | 动态脚本ID   | String  | false | baidu-map-script | 3.6.9 |
| ak        | 应用KEY    | String  | false | -                | 3.6.9 |
| width     | 宽度       | String  | false | 100%             | 3.6.9 |
| height    | 高度       | String  | false | 100vh            | 3.6.9 |
| webgl     | 启用webgl  | Boolean | false | true             | 3.6.9 |
| longitude | 默认经度     | Number  | false | -                | 3.6.9 |
| latitude  | 默认纬度     | Number  | false | -                | 3.6.9 |
| zoomLevel | 缩放级别     | Number  | false | 8                | 3.6.9 |
| zoom      | 开启鼠标滚轮缩放 | Boolean | false | true             | 3.6.9 |

## 4. 事件说明

### 4.1 加载完成

| 名称     | 回调参数                                           |  版本   |
|:-------|:-----------------------------------------------|:-----:|
| loaded | @loaded=(mapper, container, elementId) => void | 3.6.9 |

回调参数说明:

| 名称        | 说明     | 类型     |  版本   |
|:----------|:-------|:-------|:-----:|
| mapper    | 地图实例   | Object | 3.6.9 |
| container | 地图容器   | String | 3.6.9 |
| elementId | 节点元素ID | String | 3.6.9 |
