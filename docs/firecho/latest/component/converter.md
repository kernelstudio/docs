---
title: 文件转换
---

:::success{title=特别说明}
通用文件转换,底层暂时调用了`Liboffice`进行对应的文件格式转换 本地需要安装[Liboffice](/guides/latest/install/liboffice)应用
:::

## 1. 引入方式

:::code-group

```xml [pom.xml]

<dependency>
    <artifactId>firecho-converter</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 框架配置

* 配置属性<a href="/api/references/firecho/latest/com/firecho/boot/properties/converter/FirechoConverterProperties.html" target="_blank">FirechoConverterProperties</a>
* 基础自动配置<a href="/api/references/firecho/latest/com/firecho/boot/autoconfigure/converter/FirechoConverterAutoConfiguration.html" target="_blank">FirechoConverterAutoConfiguration</a>
* LibOffice配置<a href="/api/references/firecho/latest/com/firecho/boot/autoconfigure/converter/FirechoConverterAutoConfiguration.FirechoLibOfficeConverterAutoConfiguration.html" target="_blank">
  FirechoLibOfficeConverterAutoConfiguration</a>

:::code-group

```yaml [Yaml]
firecho:
  converter:
    # lib office 主目录,默认为/usr/lib/libreoffice/
    lib-office-home-path: /usr/lib/libreoffice/
```

```properties [Properties]
#  lib office 主目录,默认为/usr/lib/libreoffice/
firecho.converter.lib-office-home-path=/usr/lib/libreoffice/
```

:::

## 3. 使用方式

```java
package com.firecho.samples.converter;

import com.firecho.converter.FileConverter;
import com.firecho.converter.support.LibOfficePdfConverter;

import java.io.File;

public class FileConverterTests {

    /**
     * 手动调用
     * @param args
     */
    public static void main(String[] args) {
        FileConverter converter = new LibOfficePdfConverter();
        // 将docx文件转换为PDF文件
        converter.convert(new File("/tmp/test.docx"), new File("/tmp/test.pdf"));
    }

    /**
     * 自动注入使用
     */
    public static class FileConverterInjectTests {
        
        private final FileConverter fileConverter;
        
        public FileConverterInjectTests(FileConverter fileConverter) {
            this.fileConverter = fileConverter;
        }

        public void test() {
            // 将docx文件转换为PDF文件
            fileConverter.convert(new File("/tmp/test.docx"), new File("/tmp/test.pdf"));
        }
    }
}

```

## 4. 自定义

若业务系统需要实现自定义的文件转换器,则需要实现<a href="/api/references/firecho/latest/com/firecho/converter/FileConverter.html" target="_blank">
FileConverter</a>接口,并在自动配置中实现<a href="/api/references/firecho/latest/com/firecho/converter/configurer/FileConverterConfigurer.html" target="_blank">
FileConverterConfigurer</a>接口,若需要添加到默认的文件转换器之前,则自定义的文件转换器要实现`org.springframework.core.Ordered`接口的`getOrder()`方法并返回小于默认文件转换器的值(注意值越小越靠前),例如`-1024`,以下为示例代码

```java
package com.firecho.samples.converter;

import com.firecho.context.io.FileType;
import com.firecho.converter.ConverterException;
import com.firecho.converter.FileConverter;
import com.firecho.converter.configurer.FileConverterConfigurer;
import com.firecho.boot.condition.component.ConditionalOnConverter;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;

import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

public class FileConverterSamples {

    @Configuration
    @ConditionalOnConverter
    public static class CustomFileConverterConverter implements FileConverterConfigurer {

        /**
         * 注册自定义的文件转换器
         *
         * @param converters 已经注册的文件转换器
         */
        @Override
        public void addFileConverter(List<FileConverter> converters) {
            converters.add(new CustomFileConverter());
        }
    }

    /**
     * 自定义文件转换器
     */
    public static class CustomFileConverter implements FileConverter, Ordered {

        /**
         * 转换文件
         *
         * @param source 源文件
         * @param target 目标文件
         * @throws ConverterException 转换出现错误
         */
        @Override
        public void convert(File source, File target) throws ConverterException {

        }

        /**
         * 转换文件
         *
         * @param source     源文件流
         * @param sourceType 源文件类型
         * @param target     目标输出流
         * @param targetType 目标文件类型
         * @throws ConverterException 转换出现错误
         */
        @Override
        public void convert(InputStream source, FileType sourceType, OutputStream target, FileType targetType) throws ConverterException {

        }

        /**
         * 是否支持转换
         *
         * @param source 源文件
         * @param target 目标文件
         * @return 是否支持转换
         */
        @Override
        public boolean supports(FileType source, FileType target) {
            return false;
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