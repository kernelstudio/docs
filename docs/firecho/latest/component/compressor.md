---
title: 文件解压缩
---

## 1. 引入方式

:::code-group

```xml [pom.xml]

<dependency>
    <artifactId>firecho-compressor</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 框架配置

配置属性<a href="/api/references/firecho/latest/com/firecho/boot/properties/compressor/FirechoCompressorProperties.html" target="_blank">
FirechoCompressorProperties</a>,自动配置
<a href="/api/references/firecho/latest/com/firecho/boot/autoconfigure/compressor/FirechoCompressorAutoConfiguration.html" target="_blank">
FirechoCompressorAutoConfiguration</a>

:::code-group

```yaml [Yaml]
firecho:
  compressor:
    # 是否注册默认的压缩/解压缩器,默认为true
    register-defaults: true
    # 默认压缩类型为ZIP
    default-type: ZIP
```

```properties [Properties]
# 是否注册默认的压缩/解压缩器,默认为true
firecho.compressor.register-defaults=true
# 默认压缩类型为ZIP
firecho.compressor.default-type=ZIP
```

:::

## 3. 示例代码

```java
package com.firecho.samples.compressor;

import com.firecho.compressor.FileCompressor;
import com.firecho.compressor.FileCompressorOptions;
import com.firecho.compressor.GeneralFileCompressorOptions;
import com.firecho.compressor.support.ZipFileCompressor;
import com.firecho.compressor.CompositeFileCompressor;

import java.io.File;

public class CompressorTests {

    public static void main(String[] args) {
        File decompressDirectory = new File("/path/to/decompress");
        File sourceFile = new File("/path/to/source/tests");
        File targetFile = new File("/path/to/target/tests.tar.bz2"); // 此处会自动匹配目标压缩类型

        CompositeFileCompressor compressor = new CompositeFileCompressor();
        // 压缩目录到 /path/to/target/tests.tar.bz2
        compressor.compress(sourceFile, targetFile);

        // 将文件解压缩到/path/to/decompress目录下,带完整目录结构
        compressor.decompress(targetFile, decompressDirectory);

        // 带密码的zip文件压缩解压缩
        File zipSource = new File("/path/to/source/zip");
        File zipFile = new File("/path/to/target/zip-password.zip");
        ZipFileCompressor zipCompressor = new ZipFileCompressor();
        GeneralFileCompressorOptions zipOptions = new GeneralFileCompressorOptions("admin"); // 设置解压缩密码
        compressor.compress(zipSource, zipFile, zipOptions); // 压缩

        zipOptions.setDeleteSource(true); // 解压缩完成后删除原始zip压缩文件
        // 将文件解压缩到/path/to/decompress目录下,带完整目录结构
        zipCompressor.decompress(zipFile, decompressDirectory, zipOptions);
    }

    /**
     * 注入后使用
     */
    public static class CompressorInjectTests {

        private final FileCompressor fileCompressor;

        public CompressorInjectTests(FileCompressor fileCompressor) {
            this.fileCompressor = fileCompressor;
        }

        public test() {
            File sourceFile = new File("/path/to/source/tests");
            File targetFile = new File("/path/to/target/tests.tar.bz2"); // 此处会自动匹配目标压缩类型
            // 压缩目录到 /path/to/target/tests.tar.bz2
            compressor.compress(sourceFile, targetFile);
        }
    }
}
```

## 4. 自定义

若要在业务系统中需要自定义注册全局的解压缩器,需实现<a href="/api/references/firecho/latest/com/firecho/compressor/configurer/FileCompressorConfigurer.html" target="_blank">
FileCompressorConfigurer</a>接口并添加自定义的解压缩器<a href="/api/references/firecho/latest/com/firecho/compressor/FileCompressor.html" target="_blank">FileCompressor</a>
,若需要添加到默认的解压缩器之前,则自定义的解压缩器要实现`org.springframework.core.Ordered`接口的`getOrder()`方法并返回小于默认解压缩器的值(注意值越小越靠前),例如`-1024`

```java
package com.firecho.samples.compressor;

import com.firecho.compressor.FileCompressor;
import com.firecho.compressor.FileCompressorOptions;
import com.firecho.compressor.configurer.FileCompressorConfigurer;
import com.firecho.compressor.exception.FileCompressorException;
import com.firecho.boot.condition.component.ConditionalOnCompressor;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;

import java.io.File;
import java.util.List;

public class FileCompressorSamples {

    @Configuration
    @ConditionalOnCompressor
    public static class FileCompressorSamplesAutoConfiguration implements FileCompressorConfigurer {

        /**
         * 注册文件解压缩器
         *
         * @param compressors 已注册的文件解压缩器
         */
        @Override
        public void addFileCompressor(List<FileCompressor> compressors) {
            compressors.add(new CustomFileCompressor());
        }
    }

    /**
     * 自定义文件转换器
     */
    public static class CustomFileCompressor implements FileCompressor, Ordered {

        /**
         * 源文件是否支持压缩/解压缩
         *
         * @param file    文件
         * @param options 压缩选项
         * @return 是否支持压缩
         */
        @Override
        public boolean supports(File file, FileCompressorOptions options) {
            return false;
        }

        /**
         * 压缩文件,目标文件名称以源文件名称为前缀
         *
         * @param source  需要压缩的文件或者目录
         * @param options 压缩选项
         * @return 是否压缩成功
         * @throws com.firecho.compressor.exception.FileCompressorException 压缩出现错误
         */
        @Override
        public boolean compress(File source, FileCompressorOptions options) throws FileCompressorException {
            return false;
        }

        /**
         * 指定压缩选项压缩
         *
         * @param sources 需要压缩的文件或者目录
         * @param target  压缩后的文件名
         * @param options 压缩选项
         * @return 是否压缩成功
         * @throws FileCompressorException 压缩出现错误
         */
        @Override
        public boolean compress(List<File> sources, File target, FileCompressorOptions options) throws FileCompressorException {
            return false;
        }

        /**
         * 解压文件
         *
         * @param source  需要解压的源压缩文件
         * @param target  需要解压到的目标文件夹名称
         * @param options 解压选项
         * @return 是否解压成功
         * @throws FileCompressorException 解压出现出现错误
         */
        @Override
        public List<File> decompress(File source, File target, FileCompressorOptions options) throws FileCompressorException {
            return List.of();
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

## 5. 注意事项

文件解压缩接口<a href="/api/references/firecho/latest/com/firecho/compressor/FileCompressor.html" target="_blank">FileCompressor</a>暂时支持的压缩格式以及对应的实现类:

* `zip` 实现类 <a href="/api/references/firecho/latest/com/firecho/compressor/support/ZipFileCompressor.html" target="_blank">ZipFileCompressor</a>, 支持带密码解压缩
* `tar` 实现类 <a href="/api/references/firecho/latest/com/firecho/compressor/support/TarFileCompressor.html" target="_blank">TarFileCompressor</a>
* `tar.bz2` 实现类 <a href="/api/references/firecho/latest/com/firecho/compressor/support/TarBz2FileCompressor.html" target="_blank">TarBz2FileCompressor</a>
* `tar.gz` 实现类 <a href="/api/references/firecho/latest/com/firecho/compressor/support/TarGzipFileCompressor.html" target="_blank">TarGzipFileCompressor</a>
* 通用 <a href="/api/references/firecho/latest/com/firecho/compressor/support/CompositeFileCompressor.html" target="_blank">CompositeFileCompressor</a>, 支持自动匹配以上类型

压缩解压缩设置选项 <a href="/api/references/firecho/latest/com/firecho/compressor/GeneralFileCompressorOptions.html" target="_blank">
GeneralFileCompressorOptions</a>
中可添加自定义文件<a href="/api/references/firecho/latest/com/firecho/common/io/filters/AcceptFileFilter.html" target="_blank">
过滤器</a>来进行文件过滤处理