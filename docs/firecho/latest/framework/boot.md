---
title: Boot 
---

## 1. 引入方式

:::code-group

```xml [pom.xml]

<dependency>
    <artifactId>firecho-boot</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 常用条件

### 2.1 基础框架

* [授权管理](../framework/authorization.md)
    * <a href="/api/references/firecho/latest/com/firecho/boot/condition/framework/authorization/ConditionalOnAuthorization.html" target="_blank">ConditionalOnAuthorization</a>判断授权管理是否引入
    * <a href="/api/references/firecho/latest/com/firecho/boot/condition/framework/authorization/ConditionalOnAuthorizationCaptchaEnabled.html" target="_blank">ConditionalOnAuthorizationCaptchaEnabled</a>
      判断认证授权是否开启了验证码,默认为`false`
    * <a href="/api/references/firecho/latest/com/firecho/boot/condition/framework/authorization/ConditionalOnAuthorizationLoggerEnabled.html" target="_blank">ConditionalOnAuthorizationLoggerEnabled</a>
      判断是否开启了认证授权日志,默认为`true`
    * <a href="/api/references/firecho/latest/com/firecho/boot/condition/framework/authorization/ConditionalOnAuthorizationMobileEnabled.html" target="_blank">ConditionalOnAuthorizationMobileEnabled</a>
      是否开启了手机验证码认证授权,默认为`true`
* 数据缓存
    * <a href="/api/references/firecho/latest/com/firecho/boot/condition/framework/cache/ConditionalOnCacheDisabled.html" target="_blank">ConditionalOnCacheDisabled</a>
      判断是否禁用了缓存,默认为`false`
    * <a href="/api/references/firecho/latest/com/firecho/boot/condition/framework/cache/ConditionalOnCacheEnabled.html" target="_blank">ConditionalOnCacheEnabled</a>
      判断是否开启了缓存,默认为`true`
    * <a href="/api/references/firecho/latest/com/firecho/boot/condition/framework/cache/ConditionalOnRedisCache.html" target="_blank">ConditionalOnRedisCache</a>
      判断是否使用redis缓存策略,默认为`true`

### 2.2 组件

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/component/ConditionalOnCacheManager.html" target="_blank">ConditionalOnCacheManager</a>判断[缓存基础组件](../component/cache.md)是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/component/ConditionalOnCompressor.html" target="_blank">ConditionalOnCompressor</a>判断[文件解压缩组件](../component/compressor.md)是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/component/ConditionalOnConverter.html" target="_blank">ConditionalOnConverter</a>判断[文件转换器组件](../component/converter.md)是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/component/ConditionalOnFreemarker.html" target="_blank">ConditionalOnFreemarker</a>判断[Freemarker模版引擎](../component/freemarker.md)是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/component/ConditionalOnFonts.html" target="_blank">ConditionalOnFonts</a>判断[通用字体组件是否引入](../component/fonts.md)是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/component/ConditionalOnWatermark.html" target="_blank">ConditionalOnWatermark</a>判断[水印组件是否引入](../component/watermark.md)是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/component/ConditionalOnMyBatis.html" target="_blank">ConditionalOnMyBatis</a>判断[MyBatis组件是否引入](../component/mybatis.md)是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/component/ConditionalOnThumbnail.html" target="_blank">ConditionalOnThumbnail</a>判断[缩略图组件是否引入](../component/mybatis.md)是否引入

### 2.3 转换

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/convert/ConditionalOnLibOffice.html" target="_blank">ConditionalOnLibOffice</a>判断LibOffice转换库是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/convert/json/ConditionalOnFastjson2.html" target="_blank">ConditionalOnFastjson2</a>判断fastjson2库是否存在
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/convert/json/ConditionalOnGson.html" target="_blank">ConditionalOnGson</a>判断gson库是否存在
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/convert/json/ConditionalOnJackson2.html" target="_blank">ConditionalOnJackson2</a>判断jackson2库是否存在
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/convert/json/ConditionalOnJacksonJavaTimeModule.html" target="_blank">ConditionalOnJacksonJavaTimeModule</a>判断jackson2库的时间模块是否存在

### 2.4 数据

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/data/ConditionalOnSpringDaoSupport.html" target="_blank">ConditionalOnSpringDaoSupport</a>判断spring dao support是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/data/ConditionalOnSpringDataElasticsearch.html" target="_blank">ConditionalOnSpringDataElasticsearch</a>判断Elasticsearch是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/data/ConditionalOnSpringDataJdbc.html" target="_blank">ConditionalOnSpringDataJdbc</a>判断spring data jdbc是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/data/ConditionalOnSpringDataOpenSearch.html" target="_blank">ConditionalOnSpringDataOpenSearch</a>判断OpenSearch是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/data/ConditionalOnSpringDataRedis.html" target="_blank">ConditionalOnSpringDataRedis</a>判断spring data redis是否引入

### 2.5 JDBC驱动

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/jdbc/ConditionalOnDMJdbcDriver.html" target="_blank">ConditionalOnDMJdbcDriver</a>判断达梦数据库驱动是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/jdbc/ConditionalOnKingBase8dbcDriver.html" target="_blank">ConditionalOnKingBase8dbcDriver</a>判断人大金仓数据库驱动是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/jdbc/ConditionalOnMySQLJdbcDriver.html" target="_blank">ConditionalOnMySQLJdbcDriver</a>判断mysql驱动是否引入

### 2.6 数据迁移

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/migration/ConditionalOnLiquibase.html" target="_blank">ConditionalOnLiquibase</a>判断Liquibase迁移工具是否引入

### 2.7 安全框架

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/jdbc/ConditionalOnDMJdbcDriver.html" target="_blank">ConditionalOnDMJdbcDriver</a>判断达梦数据库驱动是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/jdbc/ConditionalOnKingBase8dbcDriver.html" target="_blank">ConditionalOnKingBase8dbcDriver</a>判断人大金仓数据库驱动是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/jdbc/ConditionalOnMySQLJdbcDriver.html" target="_blank">ConditionalOnMySQLJdbcDriver</a>判断mysql驱动是否引入

### 2.8 服务器

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/server/ConditionalOnTomcatServer.html" target="_blank">ConditionalOnTomcatServer</a>判断是否运行在tomcat服务器中
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/server/ConditionalOnWebsocketServer.html" target="_blank">ConditionalOnWebsocketServer</a>判断当前运行环境是否支持websocket

### 2.9 Session

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/session/ConditionalOnSpringDataRedisSession.html" target="_blank">ConditionalOnSpringDataRedisSession</a>判断spring data redis session是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/session/ConditionalOnSpringSession.html" target="_blank">ConditionalOnSpringSession</a>判断spring session是否引入
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/session/ConditionalOnSpringSessionMissing.html" target="_blank">ConditionalOnSpringSessionMissing</a>判断spring session是否未引入

### 2.10 操作系统

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/system/ConditionalOnDocker.html" target="_blank">ConditionalOnDocker</a>判断是否运行在docker环境中
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/system/ConditionalOnLinux.html" target="_blank">ConditionalOnLinux</a>判断当前系统是否为linux
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/system/ConditionalOnMacOS.html" target="_blank">ConditionalOnMacOS</a>判断当前系统是否为MacOS
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/system/ConditionalOnWindows.html" target="_blank">ConditionalOnWindows</a>判断当前系统是否为Windows

### 2.11 应用环境

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/environment/ConditionalOnDebug.html" target="_blank">ConditionalOnDebug</a>判断是否为debug/dev开发环境
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/environment/ConditionalOnProduction.html" target="_blank">ConditionalOnProduction</a>判断是否为生产环境
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/environment/ConditionalOnProfilers.html" target="_blank">ConditionalOnProfilers</a>判断`spring.profiles.active`配置是否包含指定的运行环境
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/environment/ConditionalOnPropertyValues.html" target="_blank">ConditionalOnPropertyValues</a>支持同时判断多个配置属性的值是否满足

### 2.12 其他

* <a href="/api/references/firecho/latest/com/firecho/boot/condition/ConditionalOnResourceExists.html" target="_blank">ConditionalOnResourceExists</a>判断指定的资源文件是否存在
* <a href="/api/references/firecho/latest/com/firecho/boot/condition/ConditionalOnYaml.html" target="_blank">ConditionalOnYaml</a>判断yaml库是否存在