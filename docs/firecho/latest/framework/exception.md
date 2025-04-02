---
title: 异常处理
---

:::warning{title=特别说明}
统一的异常拦截处理后返回的HTTP状态默认都为200,若需要特殊处理,请使用<a href="/api/references/firecho/latest/com/firecho/context/exception/ExceptionOverride.html" target="_blank">
ExceptionOverride</a>注解
:::

## 1. 引入方式

:::code-group

```xml [pom.xml]

<dependency>
    <artifactId>firecho-context</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 框架配置

配置属性<a href="/api/references/firecho/latest/com/firecho/boot/properties/framework/FirechoExceptionProperties.html" target="_blank">
FirechoExceptionProperties</a>,基础自动配置
<a href="/api/references/firecho/latest/com/firecho/boot/autoconfigure/framework/FirechoFrameworkExceptionAutoConfiguration.html" target="_blank">
FirechoFrameworkExceptionAutoConfiguration</a>, 以下为系统默认配置,若无必要,业务系统中无需配置.

:::code-group

```yaml [Yaml]
firecho:
  exception:
    # 如果是ajax异常则返回json格式的错误消息,默认true
    ajax-always-json: true
    # 是否覆盖HTTP状态码,默认true
    override-status: true
    # HTTP状态码,默认为200
    override-status-code: 200
    # 是否始终返回json错误消息
    always-json: false
    # 特定需要返回json数据的URL,默认未/api/**
    always-json-uris: /api/**
    # 错误页面返回首页首页URL, 默认为 /
    back-home-url: /
    # 错误页面是否显示返回首页, 默认为true
    back-home-visible: true
    # 错误URL地址, 默认为 /error
    error-path: /error
    # 错误视图名称, 默认为 /error, 路径为 /views/error.ftl
    view-name: /error
    # 异常URL跟view视图对应关系,下面为示例配置,具体根据业务需求来
    views-mapping:
      - path: /error
        pattern: /api/v1/**  # /api/v1/** 开头的请求使用 /views/error 错误视图页面
      - path: /admin/error
        pattern: /admin/**   # /admin/** 开头的请求使用 /views/admin/error 错误视图页面
```

:::

## 3. 使用方式

业务系统中,异常可以直接抛出,整个请求会通过统一的异常拦截器<a href="/api/references/firecho/latest/com/firecho/context/exception/ExceptionHandlerResolver.html" target="_blank">
ExceptionHandlerResolver</a>处理

```java
package com.firecho.samples.exception;

import com.firecho.context.Asserter;
import com.firecho.context.http.ApiResponse;
import liquibase.exception.CustomChangeException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/open/samples/exception")
public class ExceptionSamplesController {

    @RequestMapping("/custom")
    public ResponseEntity<ApiResponse> custom(ApiResponse api, String code) throws Exception {
        // 业务系统中直接抛出错误即可
        Asserter.hasLength(code, "CODE不能为空.");

        if ("101".equalsIgnoreCase(code)) {
            throw new CustomChangeException("抛出自定义错误.");
        }

        return ResponseEntity.ok(api.success().message("Yes"));
    }

    /**
     * 自定义业务异常,建议业务的主流程自定义异常
     */
    public static class CustomException extends RuntimeException {

        public CustomException() {
        }

        public CustomException(String message) {
            super(message);
        }

        public CustomException(String message, Throwable cause) {
            super(message, cause);
        }

        public CustomException(Throwable cause) {
            super(cause);
        }

        public CustomException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
            super(message, cause, enableSuppression, writableStackTrace);
        }
    }
}

```

若配置了`application.framework.exception.always-json-uris=/api/**`,此时后端接口始终会返回`json`格式的错误消息,在某些实际业务需求中(例如根据参数做中间页重定向请求),某些`/api/**`
开头的URL需要返回特殊的错误页面,此时可以使用<a href="/api/references/firecho/latest/com/firecho/context/exception/ExceptionOverride.html" target="_blank">
ExceptionOverride</a>注解,如下代码:

```java
package com.firecho.samples.exception;

import com.firecho.context.Asserter;
import com.firecho.context.http.ApiResponse;
import com.firecho.context.exception.ExceptionOverride;
import liquibase.exception.CustomChangeException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/open/samples/exception")
public class ExceptionSamplesController {

    @ExceptionOverride(
            json = false,
            code = "404",
            status = 404,
            message = "返回错误页面消息"
    )
    @RequestMapping("/redirect/override")
    public String custom(String code) throws Exception {
        // 业务系统中直接抛出错误即可
        Asserter.hasLength(code, "CODE不能为空.");

        if ("101".equalsIgnoreCase(code)) {
            throw new CustomChangeException("抛出自定义错误.");
        }

        return "redirect:/path/to/real/url";
    }
}

```

其中<a href="/api/references/firecho/latest/com/firecho/context/exception/ExceptionOverride.html" target="_blank">ExceptionOverride</a>注解有如下参数说明:

* `code` 重写的错误码,此错误码会覆盖默认的统一异常处理器的错误代码
* `json` 是否返回json格式数据,默认`/api/`开头的都返回的是`json`错误消息,若需要返回错误页面则设置为`false`
* `message` 自定义错误消息, 可覆盖默认抛出的异常消息
* `status` 重写的http状态码,统一的异常拦截返回的状态码都是`200`,若特殊业务需要返回对应的状态码则可使用此定义进行自定义覆盖

整个异常处理优先级为 `ExceptionOverride > ExceptionHandlerResolver`

## 4. 自定义

若需要将业务系统异常翻译为中文/有明确意义的异常信息,例如对于如下业务系统异常,有两种实现方式.

```java
package com.firecho.samples.exception;

/**
 * 自定义业务异常,建议业务的主流程自定义异常
 */
public class CustomException extends RuntimeException {

    public CustomException() {
    }

    public CustomException(String message) {
        super(message);
    }

    public CustomException(String message, Throwable cause) {
        super(message, cause);
    }

    public CustomException(Throwable cause) {
        super(cause);
    }

    public CustomException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
```

### 4.1 自定义异常翻译器

自定义一个异常翻译器,需要自定义实现<a href="/api/references/firecho/latest/com/firecho/context/exception/ApplicationExceptionTranslator.html" target="_blank">
ApplicationExceptionTranslator</a>异常翻译器接口,若需要添加到默认的异常翻译器之前,则自定义的异常翻译器要实现`org.springframework.core.Ordered`接口的`getOrder()`方法并返回小于默认解压缩器的值(注意值越小越靠前),例如`-1024`

```java
package com.firecho.samples.exception;

import com.firecho.context.exception.ApplicationException;
import com.firecho.context.exception.ApplicationExceptionTranslator;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class CustomExceptionTranslator implements ApplicationExceptionTranslator {

    /**
     * 翻译异常
     *
     * @param req 当前请求
     * @param res 当前响应
     * @param ex  异常
     * @return 异常后的异常
     */
    @Override
    public ApplicationException translate(HttpServletRequest req, HttpServletResponse res, Exception ex) {
        return new ApplicationException("覆盖默认的异常消息", ex);
    }

    /**
     * 检查当前翻译器是否支持翻译对应的异常信息
     *
     * @param req 当前请求
     * @param res 当前响应
     * @param ex  异常
     * @return 是否支持翻译对应的异常信息
     */
    @Override
    public boolean supports(HttpServletRequest req, HttpServletResponse res, Exception ex) {
        return CustomException.class.isAssignableFrom(ex.getClass());
    }

    /**
     * 排序值,值越小越靠前
     *
     * @return 排序值
     */
    @Override
    public int getOrder() {
        return -1024;
    }
}

```

注册自定义异常翻译器,需要实现<a href="/api/references/firecho/latest/com/firecho/context/web/configurer/FirechoFrameworkConfigurer.html" target="_blank">
FirechoFrameworkConfigurer</a>接口的`addExceptionTranslator(List<ApplicationExceptionTranslator> exceptionTranslators)`方法

```java
package com.firecho.samples.exception;

import com.firecho.boot.condition.framework.ConditionalOnFramework;
import com.firecho.context.exception.ApplicationExceptionTranslator;
import com.firecho.context.web.configurer.FirechoFrameworkConfigurer;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@ConditionalOnFramework
public class CustomExceptionTranslatorAutoConfiguration implements FirechoFrameworkConfigurer {

    /**
     * 添加自定义的异常翻译器
     *
     * @param exceptionTranslators 自定义的异常翻译器
     */
    @Override
    public void addExceptionTranslator(List<ApplicationExceptionTranslator> exceptionTranslators) {
        exceptionTranslators.add(new CustomExceptionTranslator());
    }
}

```

或者直接使用`@Bean`注册

```java
package com.firecho.samples.exception;

import com.firecho.context.function.Function2;
import com.firecho.boot.condition.framework.ConditionalOnFramework;
import com.firecho.context.web.configurer.FirechoFrameworkConfigurer;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
@ConditionalOnFramework
public class CustomExceptionTranslatorAutoConfiguration {

    /**
     * 添加自定义异常匹配规则
     */
    @Bean 
    public CustomExceptionTranslator customExceptionTranslator(){
        return new CustomExceptionTranslator();
    }
}

```

### 4.2 自定义Mapping

需要实现<a href="/api/references/firecho/latest/com/firecho/context/web/configurer/FirechoFrameworkConfigurer.html" target="_blank">
FirechoFrameworkConfigurer</a>接口的`addExceptionMapping(Map<Class<? extends Exception>, Function2<HttpServletRequest, Exception, String>> mappings)`方法

```java
package com.firecho.samples.exception;

import com.firecho.context.function.Function2;
import com.firecho.boot.condition.framework.ConditionalOnFramework;
import com.firecho.context.web.configurer.FirechoFrameworkConfigurer;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
@ConditionalOnFramework
public class CustomExceptionTranslatorAutoConfiguration implements FirechoFrameworkConfigurer {

    /**
     * 添加自定义异常匹配规则
     *
     * @param mappings 自定义异常匹配规则
     */
    @Override
    public void addExceptionMapping(Map<Class<? extends Exception>, Function2<HttpServletRequest, Exception, String>> mappings) {
        mappings.put(CustomException.class, (request, exception) -> "自定义错误消息");
    }
}

```

## 5. 默认实现

以下默认异常翻译器根据优先策略依次匹配.

* <a href="/api/references/firecho/latest/com/firecho/context/exception/translator/ExceptionMappingExceptionTranslator.html" target="_blank">ExceptionMappingExceptionTranslator</a>自定义注册的异常处理mapping,排序`order`为`-8192000`
* <a href="/api/references/firecho/latest/com/firecho/context/exception/translator/GeneralApplicationExceptionTranslator.html" target="_blank">GeneralApplicationExceptionTranslator</a>通用异常翻译器,排序`order`为`4096000`
* <a href="/api/references/firecho/latest/com/firecho/context/exception/translator/StatusApplicationExceptionTranslator.html" target="_blank">StatusApplicationExceptionTranslator</a>,排序`order`为`8192000`
  兜底HTTP状态异常翻译器,若以上异常翻译器且业务系统异常翻译器都不匹配时的默认翻译器