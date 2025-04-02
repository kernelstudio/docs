---
title: MyBatis 
---

## 1. 引入方式

:::code-group

```xml [pom.xml]

<dependency>
    <artifactId>firecho-mybatis</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 框架配置

* 配置属性<a href="/api/references/firecho/latest/com/firecho/boot/properties/mybatis/FirechoMyBatisProperties.html" target="_blank">FirechoMyBatisProperties</a>
* 自动配置<a href="/api/references/firecho/latest/com/firecho/boot/autoconfigure/mybatis/FirechoMyBatisAutoConfiguration.html" target="_blank">FirechoMyBatisAutoConfiguration</a>

```yaml
mybatis:
    # 对于实体类上加上@Entity注解的时候, 是否禁用类名别名,否则为类的全名(包括包名)
    disableShortAlias: false
    # 默认自动扫描namespace包路径
    type-aliases-packages: com.firecho,com.kernelstudio
    # 默认自动扫描别名配置文件路径
    type-aliases-locations: classpath*:com/kernelstudio/**/mybatis/*aliases.xml,classpath*:com/firecho/**/mybatis/*aliases.xml
    # 默认mapper文件路径
    mapper-locations: classpath*:com/kernelstudio/**/mybatis/*.xml,classpath*:com/kernelstudio/**/mybatis/mapper/*.xml,classpath*:com/firecho/**/mybatis/*.xml,classpath*:com/firecho/**/mybatis/mapper/*.xml
```

## 3. 使用方式

:::warning{title=特别说明}
考虑到多模块场景下别名有可能冲突的情况,建议整个项目中如果使用xml编写配置时,不要使用别名而使用完整的命名空间.
:::

### 3.1 Entity

```java
package com.firecho.samples.mybatis;

import jakarta.persistence.Entity;
import java.io.Serializable;

@Entity
public class TestUser implements Serializable {

    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
```

对于以上实体类,若配置`mybatis.disableShortAlias`为`true`时,此时会自动注册一个别名`TestUser`以及一个完整的命名空间`com.firecho.samples.mybatis.TestUser`

### 3.2 Repository

注意 `#getNamespaceClass()` 返回命名空间类, `#findOneByUsername(username)` 查询用户的时候,最终生成的查询命名空间为
`com.firecho.samples.mybatis.TestUserRepository.findOneByUsername`

```java
package com.firecho.samples.mybatis;

import com.firecho.mybatis.CurdRepository;

import java.io.Serializable;

public class TestUserRepository extends NamespaceDaoSupport<TestUser> {
    
    @Override
    public Class<?> getNamespaceClass() {
        // 获取命名空间类
        return TestUserRepository.class;
    }
    
    public TestUser findOneByUsername(String username) {
        return findOneBy("username", username);
    }
}
```

### 3.3 Mapper

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "/WEB-INF/schema/mybatis-3-mapper.dtd">

<mapper namespace="com.firecho.samples.mybatis.TestUserRepository">
    
    <resultMap id="UserMap" type="com.firecho.samples.mybatis.TestUser">
        <id property="username" column="username"/>
    </resultMap>

    <select id="findOneByUsername" resultMap="UserMap">
        SELECT * FROM ks_user
        WHERE username=#{username}
        limit 1
    </select>
</mapper>
```