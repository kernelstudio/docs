---
title: 静态资源 
group: 基础组件
---

:::warning{title=特别说明}
此组件打包了常用的JS/CSS组件库,业务系统只需要单独引入此组件库,可以减少业务系统多了之后JS/CSS库的版本维护问题,以及方便后续版本升级.
:::

## 1. 引入方式

:::code-group

```xml [pom.xml]

<dependency>
    <artifactId>firecho-assets</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 静态资源
具体支持的图片/CSS/JS静态资源库可查看<a href="https://github.com/kernelstudio/firecho/master/firecho-assets/src/main/resources/META-INF/assets/bundler" target="_blank">Github</a>
或<a href="https://gitee.com/firecho/firecho/master/firecho-assets/src/main/resources/META-INF/assets/bundler" target="_blank">Gitee</a>

## 3. freemarker指令

此功能需要引入[firecho-freemarker](/firecho/latest/component/freemarker)模块

* `<@asset_jquery_js />` 对应 `/assets/bundler/vendor/jquery/js/jquery.min.js`
* `<@asset_fontawesome_css />` 对应 `/assets/bundler/vendor/fontawesome/css/font-awesome.min.css`
* `<@asset_bootstrap3_css />` 对应 `/assets/bundler/vendor/bootstrap/3/css/bootstrap.min.css`
* `<@asset_bootstrap3_js />` 对应 `/assets/bundler/vendor/bootstrap/3/js/bootstrap.min.js`
* `<@asset_bootstrap4_css />` 对应 `/assets/bundler/vendor/bootstrap/4/css/bootstrap.min.css`
* `<@asset_bootstrap4_js />` 对应 `/assets/bundler/vendor/bootstrap/4/js/bootstrap.min.js`
* `<@asset_bootstrap5_css />` 对应 `/assets/bundler/vendor/bootstrap/5/css/bootstrap.min.css`
* `<@asset_bootstrap5_js />` 对应 `/assets/bundler/vendor/bootstrap/5/js/bootstrap.bundle.min.js`
* `<@asset_geo_js />` 对应 `/assets/bundler/vendor/geo/js/geo.min.js`