---
title: 模版引擎 
group: 基础组件
---

## 1. 引入方式

:::code-group

```xml [pom.xml]

<dependency>
    <artifactId>firecho-freemarker</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 框架配置

* 自动配置<a href="/api/references/firecho/latest/com/firecho/boot/autoconfigure/freemarker/FirechoFreemarkerAutoConfiguration.html" target="_blank">
FirechoFreemarkerAutoConfiguration</a>

以下为基础框架的默认配置,若无必要,保持默认值即可,不用在业务系统中配置

:::code-group

```yaml [Yaml]
spring:
  freemarker:
    enabled: true
    allow-request-override: false
    check-template-location: true
    charset: UTF-8
    content-type: text/html
    request-context-attribute: requestContext
    expose-request-attributes: false
    expose-session-attributes: false
    expose-spring-macro-helpers: true
    suffix: .ftl
    template-loader-path: classpath:/views/
    prefer-file-system-access: false
    settings:
      template_update_delay: 0
      default_encoding: UTF-8
      datetime_format: yyyy-MM-dd HH:mm:ss
      classic_compatible: true
      template_exception_handler: ignore
      locale: zh_CN
      number_format: 0.##########
```

:::

## 3. 页面布局

* `block` 定义一个块,看作是定义一个占位符区域
* `override` 复写并填充基础布局模版或者通用组件中的块
* `extends` 继承某个基础布局模版或者通用组件
* `super` 调用`extends`继承的某个基础布局模版或者通用组件中的相应块后在执行当前页面的相应逻辑,例如

基础布局页面使用`<@block name="块名称"></@block>`定义块占位符,例如在`/views/layout/base.ftl`中定义如下块.

```text
...
<!-- page_content 为块占位符 -->
<@block name="page_content">
  <!-- 默认的内容 -->
  parent_content 
</@block>
...
```

在具体业务页面例如 `/views/samples/test.ftl`中

```text
<!-- page_content 为 /layout/base.ftl 中定义的块占位符 -->
<@override name="page_content">

    <@super /> <!-- 首先显示基础布局文件中的内容 parent_content -->
    
    children_content
    
    <@super /> <!-- 首先显示子页面的内容children_content, 然后再显示基础布局文件中的内容 parent_content -->

</@override>

<!-- 继承某个基础布局模版或者通用组件, 注意路径是从/views/目录下开始 -->
<@extends name="/layout/base.ftl"/>
```

## 4. 自定义

### 4.1 自定义变量

:::code-group

```java
package com.firecho.samples.freemarker;

import com.firecho.freemarker.FreemarkerVariable;
import com.firecho.freemarker.FreemarkerVariableRegistry;
import com.firecho.freemarker.configurer.FreemarkerViewConfigurer;
import com.firecho.boot.condition.freemarker.ConditionalOnFreemarker;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

public class FreemarkerSamples {

    @Configuration
    @ConditionalOnFreemarker
    public static class CustomFreemarkerVariableAutoConfiguration implements FreemarkerViewConfigurer {

        /**
         * 方式1: 通过实现FreemarkerViewConfigurer接口
         */
        @Override
        public void configure(FreemarkerVariableRegistry registry) {
            registry.add(new CustomFreemarkerVariable());
        }

        /**
         * 方式2: 直接实例化
         */
        @Bean
        @ConditionalOnMissingBean
        public CustomFreemarkerVariable customFreemarkerVariable() {
            return new CustomFreemarkerVariable();
        }
    }

    /**
     * 定义自定义变量
     */
    public static class CustomFreemarkerVariable implements FreemarkerVariable {

        public String getUsername() {
            return "username";
        }

        /**
         * 获取名称,注意全局必须唯一
         *
         * @return 名称
         */
        @Override
        public String getName() {
            return "custom";
        }
    }
}
```
:::

页面上使用 `${custom.username}` 获取对应方法的返回值

### 4.2 自定义指令

:::code-group

```java
package com.firecho.samples.freemarker;

import com.firecho.freemarker.FreemarkerDirective;
import com.firecho.freemarker.FreemarkerVariableRegistry;
import com.firecho.freemarker.configurer.FreemarkerViewConfigurer;
import com.firecho.boot.condition.freemarker.ConditionalOnFreemarker;
import freemarker.core.Environment;
import freemarker.template.TemplateDirectiveBody;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.Nullable;
import java.io.IOException;
import java.util.Map;

public class FreemarkerSamples {


    @Configuration
    @ConditionalOnFreemarker
    public static class CustomFreemarkerDirectiveAutoConfiguration implements FreemarkerViewConfigurer {

        /**
         * 方式1: 通过实现FreemarkerViewConfigurer接口
         */
        @Override
        public void configure(FreemarkerVariableRegistry registry) {
            registry.add(new CustomDirective());
        }

        /**
         * 方式2: 直接实例化
         */
        @Bean
        @ConditionalOnMissingBean
        public CustomDirective customDirective() {
            return new CustomDirective();
        }
    }

    /**
     * 定义自定义指令
     */
    public static class CustomDirective extends FreemarkerDirective {

        @Override
        public void doExecute(Environment env, Map params, @Nullable TemplateModel[] loopVars, @Nullable TemplateDirectiveBody body)
                throws TemplateException, IOException {

            // 获取参数
            String realVersion = toStringValue(params, "version");

            StringBuilder sb = new StringBuilder();
            sb.append("custom version=").append(realVersion);
            write(env, body, sb);
        }

        /**
         * 获取指令名称,注意全局必须唯一
         *
         * @return 名称
         */
        @Override
        public String getName() {
            return "custom_directive";
        }
    }
}
```
:::

页面上使用 `<@custom_directive version="3.0" />` 来执行`doExecute`方法里的业务逻辑并输出相应的内容.