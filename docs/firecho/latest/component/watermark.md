---
title: 文件水印 
---

:::warning{title=特别说明}
暂时只支持后缀名为`doc,docx,ppt,pptx,xls,xlsx,png,jpg,jpeg,ofd,pdf`文件添加水印
:::

## 1. 引入方式

:::code-group

```xml [pom.xml]

<dependency>
    <artifactId>firecho-watermark</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 框架配置

配置属性<a href="/api/references/firecho/latest/com/firecho/boot/properties/watermark/FirechoWatermarkProperties.html" target="_blank">
FirechoWatermarkProperties</a>,基础自动配置
<a href="/api/references/firecho/latest/com/firecho/boot/autoconfigure/watermark/FirechoWatermarkAutoConfiguration.html" target="_blank">
FirechoWatermarkAutoConfiguration</a>

:::code-group

```yaml [Yaml]
firecho:
  watermark:
    # 是否启用水印,默认为true
    enabled: true
```

```properties [Properties]
# 是否启用水印,默认为true
firecho.watermark.enabled=true
```

:::

## 3. 使用方式

:::code-group

```java [自动注入]
package com.firecho.samples.watermark;

import com.firecho.context.utils.IoUtils;
import com.firecho.watermark.DefaultWatermarkFactory;
import com.firecho.watermark.Watermark;
import com.firecho.watermark.WatermarkFactory;

import java.io.File;
import java.nio.file.Files;

public class WatermarkTests {

    private final WatermarkFactory watermarkFactory;

    public WatermarkTests(WatermarkFactory watermarkFactory) {
        this.watermarkFactory = watermarkFactory;
    }

    public void test() throws Exception {
        Watermark watermark = new Watermark("测试/本部/超级管理员/2023-10-22 13:00:00");

        File f = new File("/tmp/1.docx");
        File t = new File("/tmp/1-output.docx");
        System.out.println("processing " + f + " to " + t);
        byte[] bytes = watermarkFactory.handle(f, watermark);
        IoUtils.write(Files.newOutputStream(t.toPath()), bytes);
    }
}
```

```java [手动调用]
package com.firecho.samples.watermark;

import com.firecho.context.utils.IoUtils;
import com.firecho.watermark.DefaultWatermarkFactory;
import com.firecho.watermark.Watermark;
import com.firecho.watermark.WatermarkFactory;

import java.io.File;
import java.nio.file.Files;

public class WatermarkTests {

    public void test() throws Exception {
        Watermark watermark = new Watermark("测试/本部/超级管理员/2023-10-22 13:00:00");
        WatermarkFactory watermarkFactory = new DefaultWatermarkFactory();

        File f = new File("/tmp/1.docx");
        File t = new File("/tmp/1-output.docx");
        System.out.println("processing " + f + " to " + t);
        byte[] bytes = watermarkFactory.handle(f, watermark);
        IoUtils.write(Files.newOutputStream(t.toPath()), bytes);
    }
}
```

:::

## 5. 自定义

### 5.1 自定义处理器

若要在业务系统中需要自定义注册全局的水印处理器,需实现<a href="/api/references/firecho/latest/com/firecho/watermark/configurer/WatermarkConfigurer.html" target="_blank">
WatermarkConfigurer</a>接口并添加自定义的水印处理器<a href="/api/references/firecho/latest/com/firecho/watermark/WatermarkHandler.html" target="_blank">WatermarkHandler</a>
,若需要添加到默认的水印处理器之前,则自定义的水印处理器要实现`org.springframework.core.Ordered`接口的`getOrder()`方法并返回小于默认水印处理器的值(注意值越小越靠前),例如`-1024`

```java
package com.firecho.samples.watermark;

import com.firecho.context.io.FileType;
import com.firecho.watermark.Watermark;
import com.firecho.watermark.WatermarkHandler;
import com.firecho.watermark.configurer.WatermarkConfigurer;
import com.firecho.boot.condition.component.ConditionalOnWatermark;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;

import java.io.IOException;
import java.util.List;

public class WatermarkSamples {


    @Configuration
    @ConditionalOnWatermark
    public static class WatermarkSamplesAutoConfiguration implements WatermarkConfigurer {

        /**
         * 添加自定义水印处理器
         *
         * @param handlers 自定义水印处理器
         */
        @Override
        public void addWatermarkHandler(List<WatermarkHandler> handlers) {
            handlers.add(new CustomWatermarkHandler());
        }
    }

    public static class CustomWatermarkHandler implements WatermarkHandler, Ordered {

        /**
         * 判断指定的文件类型是否支持添加水印
         *
         * @param type 文件类型
         * @return 是否支持添加水印
         */
        @Override
        public boolean supports(FileType type) {
            return false;
        }

        /**
         * 给指定的文件流添加水印
         *
         * @param source    可添加水印的文件字节
         * @param watermark 水印配置
         * @param type      文件类型
         * @return 添加水印后的文件, 如果不支持添加水印则返回原始字节
         * @throws IOException 添加水印出现错误
         */
        @Override
        public byte[] handle(byte[] source, Watermark watermark, FileType type) throws IOException {
            return new byte[0];
        }

        /**
         * 排序值,越小越靠前
         */
        @Override
        public int getOrder() {
            return -1024;
        }
    }
}
```

### 5.2 自定义内容

* 若要根据当前用户/请求显示不同的水印内容,只需要实现<a href="/api/references/firecho/latest/com/firecho/watermark/WatermarkCustomizer.html" target="_blank">
  WatermarkCustomizer</a>接口。
* 默认的水印内容自定义处理为<a href="/api/references/firecho/latest/com/firecho/core/watermark/UserSessionWatermarkCustomizer.html" target="_blank">
  UserSessionWatermarkCustomizer</a>,包括了用户的完整部门/用户真实姓名/当前系统时间,需要引入[firecho-core](/firecho/latest/core)