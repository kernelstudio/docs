---
title: 通用平台
nav:
  title: 通用平台
  order: 1
---

## 1. 目录结构

:::info{title=特别说明}
以下目录结构可按实际需求来.
:::

<Tree title="平台名称-platform-parent">

<ul>
    <li>
        apps
        <small>业务系统应用入口目录</small>
        <ul>
            <li>
                平台名称-应用名称-web
                <ul>
                    <li>src<ul></ul></li>
                    <li>pom.xml</li>
                </ul>
            </li>
            <li>pom.xml</li>
        </ul>
    </li>
    <li>
        bundle
        <small>bundle模块</small>
        <ul>
            <li>
                平台名称-应用名称-web
                <ul>
                    <li>
                        src
                        <ul>
                            <li>
                                main
                                <ul>
                                    <li>
                                        java
                                        <ul>
                                            <li>
                                                com
                                                <ul>
                                                    <li>
                                                        firecho
                                                        <ul>
                                                            <li>
                                                                bundle名称
                                                                <ul>
                                                                    <li>
                                                                        boot
                                                                        <small>自动配置/属性相关目录</small>
                                                                        <ul>
                                                                            <li>
                                                                                properties
                                                                                <small>配置属性</small>
                                                                                <ul>
                                                                                    <li>
                                                                                        bundle名称BundleProperties.java
                                                                                        <small>配置属性</small>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                autoconfigure
                                                                                <small>自动配置</small>
                                                                                <ul>
                                                                                    <li>
                                                                                        bundle名称BundleAutoConfiguration.java
                                                                                        <small>自动配置</small>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        entity
                                                                        <small>实体类相关</small>
                                                                        <ul></ul>
                                                                    </li>
                                                                    <li>
                                                                        model
                                                                        <small>model层,按需进行目录拆分</small>
                                                                        <ul>
                                                                            <li>
                                                                                service
                                                                                <small>服务层</small>
                                                                                <ul></ul>
                                                                            </li>
                                                                            <li>
                                                                                repository
                                                                                <small>repository层</small>
                                                                                <ul></ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        utils
                                                                        <small>通用工具类</small>
                                                                        <ul></ul>
                                                                    </li>
                                                                    <li>
                                                                        rest
                                                                        <small>控制器层或者目录名称为controllers</small>
                                                                        <ul></ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        resources
                                        <small>资源文件</small>
                                        <ul></ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>pom.xml</li>
                </ul>
            </li>
            <li>pom.xml</li>
        </ul>
    </li>
    <li>
        context
        <small>所属平台公共基础代码,依赖尽量做到少量引入</small>
        <ul>
            <li>src<ul></ul></li>
            <li>pom.xml</li>
        </ul>
    </li>
    <li>
        component
        <small>所属平台的公共组件</small>
        <ul>
            <li>src<ul></ul></li>
            <li>pom.xml</li>
        </ul>
    </li>
    <li>
        sbin
        <small>自定义脚本等</small>
        <ul>
            <li>
                build.sh
                <small>编译脚本</small>
            </li>
        </ul>
    </li>
    <li>
        upgrade
        <small>升级脚本/SQL等文件</small>
        <ul>
            <li>
                sql
                <small>升级SQL</small>
                <ul>
                    <li>
                        业务系统1
                        <small>升级SQL</small>
                        <ul>
                            <li>2025-表名称-001.sql</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                docs
                <small>升级文档</small>
                <ul>
                    <li>
                        业务系统1
                        <small>升级SQL</small>
                        <ul>
                            <li>2025-001.md</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        migration
        <small>数据迁移代码</small>
        <ul>
            <li>src<ul></ul></li>
            <li>pom.xml</li>
        </ul>
    </li>
    <li>
        tests
        <small>测试代码</small>
        <ul>
            <li>src<ul></ul></li>
            <li>pom.xml</li>
        </ul>
    </li>
    <li>
        web
        <small>前端应用目录</small>
        <ul>
            <li>应用名称1<ul></ul></li>
            <li>应用名称2<ul></ul></li>
        </ul>
    </li>
    <li>
        docs
        <small>说明文档/设计文档等开发过程中需要标注的</small>
        <ul></ul>
    </li>
    <li>
        docker
        <small>docker相关目录</small>
        <ul></ul>
    </li>
    <li>
        module
        <small>业务系统模块</small>
        <ul></ul>
    </li>
    <li>
        mobile
        <small>手机应用目录,若需要则创建</small>
        <ul></ul>
    </li>
    <li>.gitignore</li>
    <li>.editorconfig<small>IDEA编辑器配置文件</small></li>
    <li>.gitattributes<small>GIT属性文件</small></li>
    <li>.gitlab-ci.yml<small>GITLAB CI相关</small></li>
    <li>pom.xml</li>
    <li>CHANGELOG.md<small>变更记录</small></li>
    <li>code-styles.xml<small>IDEA代码格式</small></li>
    <li>README.md<small>项目说明文件</small></li>
    <li>TODO.md<small>待开发功能等</small></li>
</ul>

</Tree>
 
附加目录结构说明

* `bundle` 是指单一功能且各个功能模块/应用所依赖的最基础的一个单元,包括实体类/属性配置/自动配置/控制器等,尊从最小化原则,尽量不要引入过多的依赖.
* `module` 是指业务系统应用按功能模块进行拆分,例如拆分出`api/model/autoconfig/rest`等,跨业务系统的情况下,可以直接引入对应的模块而不用重复编码,
  减少代码的冗余.一个`module`模块中,正常依赖顺序应该为`rest -> autoconfigure -> model -> api`.

## 2. 通用平台

`平台名称-platform-parent/pom.xml` 文件为整个平台的基础,正常情况下如下所示:

:::code-group

```xml [pom.xml]
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <groupId>com.firecho.starter</groupId>
        <artifactId>firecho-platform-starter-parent</artifactId>
        <version>3.6.9</version>
        <relativePath/>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.firecho.app.平台名称</groupId>
    <artifactId>平台名称-platform-parent</artifactId>
    <version>3.6.9-SNAPSHOT</version>
    <packaging>pom</packaging>

    <modules>
        <module>bundle</module>
        <module>context</module>
        <module>module</module>
        <module>migration</module>
        <module>tests</module>
    </modules>

</project>

```
:::

`parent` 块中的为固定格式,一般不用修改,`modules`块中是指需要编译的子模块.

## 3. 注意事项

若子平台`平台名称-platform-parent/pom.xml`中的`parent` 为`firecho-platform-starter-parent` 或 `firecho-parent` 或 `firecho-starter-parent`时, 则约定在子平台以及所有的子模块的`pom.xml`
中,引入对应`parent`中的依赖时,不要带版本号,例如

:::code-group

```shell [推荐写法]
<dependency>
    <artifactId>firecho-common</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

```shell [不推荐写法]
<dependency>
    <artifactId>firecho-common</artifactId>
    <groupId>com.firecho</groupId>
    <version>3.6.9</version>
</dependency>
```

:::

此约定是为了方便后续底层`firecho-parent`框架进行版本升级时,避免业务系统升级改造不完全而引入不同版本的依赖导致运行失败.
