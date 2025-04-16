---
title: 基础工具
group: 基础组件
---

:::warning{title=特别说明}
此组件包中包含大量基础性代码，其功能可能与其他第三方开源项目工具有很多相似之处，因早期大量应用到公司项目中所以才保留，具体定制开发过程中可按需求使用。
:::

## 1. 引入方式

:::code-group

```xml [pom.xml]
<dependency>
    <artifactId>firecho-common</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```
:::

## 2. 通用工具

* AESUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/AESUtils.html" target="_blank">AES加密解密</a>
* AnnotationUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/AnnotationUtils.html" target="_blank">注解相关方法</a>
* Base64Utils <a href="/api/references/firecho/latest/com/firecho/common/utils/Base64Utils.html" target="_blank">Base64编码解码</a>
* BeanUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/BeanUtils.html" target="_blank">Bean相关方法</a>
* CryptoUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/CryptoUtils.html" target="_blank">加解密验证</a>
* DateTimeUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/DateTimeUtils.html" target="_blank">时间日期类操作方法</a>
* Hex64Utils <a href="/api/references/firecho/latest/com/firecho/common/utils/Hex64Utils.html" target="_blank">10进制与64进制相互转换</a>
* ExceptionUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/ExceptionUtils.html" target="_blank">异常处理相关</a>
* FastJsonUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/FastJsonUtils.html" target="_blank">fastjson2相关,不建议使用</a>
* FilesystemUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/FilesystemUtils.html" target="_blank">文件处理相关</a>
* FontUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/FontUtils.html" target="_blank">字体相关操作</a>
* HexUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/HexUtils.html" target="_blank">HEX编码解码</a>
* HtmlUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/DateTimeUtils.html" target="_blank">HTML/DOM相关</a>
* ImageUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/ImageUtils.html" target="_blank">图片编码/解码相关</a>
* IoUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/IoUtils.html" target="_blank">IO相关</a>
* IpUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/IpUtils.html" target="_blank">IP地址常用工具</a>
* JsonUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/JsonUtils.html" target="_blank">json工具</a>
* MapUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/MapUtils.html" target="_blank">Map相关操作</a>
* MD5Utils <a href="/api/references/firecho/latest/com/firecho/common/utils/MD5Utils.html" target="_blank">MD5加密相关</a>
* ObjectUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/ObjectUtils.html" target="_blank">对象相关</a>
* PathUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/PathUtils.html" target="_blank">路径相关方法</a>
* PinyinUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/PinyinUtils.html" target="_blank">汉字拼音相关</a>
* ReflectionUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/ReflectionUtils.html" target="_blank">反射相关方法</a>
* Regexs <a href="/api/references/firecho/latest/com/firecho/common/utils/Regexs.html" target="_blank">基础正则表达式</a>
* RequestUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/RequestUtils.html" target="_blank">请求相关方法</a>
* ResponseUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/ResponseUtils.html" target="_blank">响应相关方法</a>
* RSAUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/RSAUtils.html" target="_blank">SA公钥/私钥/签名工具包</a>
* Signaturer <a href="/api/references/firecho/latest/com/firecho/common/utils/Signaturer.html" target="_blank">签名验证</a>
* SQLUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/SQLUtils.html" target="_blank">SQL字符串相关方法</a>
* StringUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/StringUtils.html" target="_blank">字符串处理相关方法</a>
* SystemUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/SystemUtils.html" target="_blank">系统处理类方法</a>
* TreeUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/TreeUtils.html" target="_blank">树结构相关操作方法</a>
* UrlUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/UrlUtils.html" target="_blank">URL处理相关方法</a>
* ValidatorUtils <a href="/api/references/firecho/latest/com/firecho/common/utils/ValidatorUtils.html" target="_blank">验证相关方法</a>