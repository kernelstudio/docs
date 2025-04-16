---
title: 数据缓存
group: 基础组件
---

:::warning{title=特别说明}
通用数据缓存组件,暂时只支持`redis`缓存,具体缓存操作请查看<a href="/api/references/firecho/latest/com/firecho/cache/CacheManager.html" target="_blank">CacheManager</a>
:::

## 1. 引入方式

:::code-group

```xml [pom.xml]
<dependency>
    <artifactId>firecho-cache</artifactId>
    <groupId>com.firecho</groupId>
</dependency>
```

:::

## 2. 框架配置

配置属性<a href="/api/references/firecho/latest/com/firecho/boot/properties/cache/FirechoCacheProperties.html" target="_blank">
FirechoCacheProperties</a>,基础自动配置
<a href="/api/references/firecho/latest/com/firecho/boot/autoconfigure/cache/FirechoCacheAutoConfiguration.html" target="_blank">
FirechoCacheAutoConfiguration</a>,
Redis缓存配置<a href="/api/references/firecho/latest/com/firecho/boot/autoconfigure/cache/FirechoRedisCacheAutoConfiguration.html" target="_blank">
FirechoRedisCacheAutoConfiguration</a>

:::code-group

```yaml [Yaml]
firecho:
  cache:
    # 是否启用缓存,默认为true
    enabled: true
    # 缓存命名空间,同一个平台下的不同应用需要配置统一,否则应用之间会进行缓存隔离
    namespace: "firecho"
    # 默认过期时间(秒),0为不过期
    default-expired-seconds: 0
    # 是否启动时候加载缓存
    loadable: true
    # 缓存存储策略,默认为redis,暂时只支持redis
    strategy: redis
```

```properties [Properties]
# 是否启用缓存,默认为true
firecho.cache.enabled=true
# 缓存命名空间,同一个平台下的不同应用需要配置统一,否则应用之间会进行缓存隔离
firecho.cache.prefix="firecho"
# 默认过期时间(秒),0为不过期
firecho.cache.default-expired-seconds=0
# 是否启动时候加载缓存
firecho.cache.loadable=true
# 缓存存储策略,默认为redis,暂时只支持redis
firecho.cache.strategy=redis
```

:::

## 3. 使用方式

只要实现了 <a href="/api/references/firecho/latest/com/firecho/cache/CacheManagerAware.html" target="_blank">CacheManagerAware</a>
接口的 <a href="/api/references/firecho/latest/com/firecho/cache/CacheManagerAware.html#setCacheManager(com.firecho.cache.CacheManager)" target="_blank">setCacheManager</a>
方法,应用启动时会自动注入<a href="/api/references/firecho/latest/com/firecho/cache/CacheManager.html" target="_blank">CacheManager</a>


:::code-group

```java [自动注入]
package com.firecho.samples.cache;

import com.firecho.cache.CacheManager;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class TestCache {

    private CacheManager cacheManager;

    public TestCache(CacheManager cacheManager) {
        this.cacheManager = cacheManager;
    }

    public void test() {
        // 自定义缓存读取逻辑
        cacheManager.put("key", "value");
    }
}
```

```java [接口注入]
package com.firecho.samples.cache;

import com.firecho.cache.CacheManager;
import com.firecho.cache.CacheManagerAware;
import org.springframework.stereotype.Component;

@Component
public class TestCache implements CacheManagerAware {

    private CacheManager cacheManager;

    public void test() {
        // 自定义缓存读取逻辑
        cacheManager.put("key", "value");
    }

    @Override
    public void setCacheManager(CacheManager cacheManager) {
        this.cacheManager = cacheManager;
    }
}
```
:::

## 4. 自定义缓存

继承抽象基础类<a href="/api/references/firecho/latest/com/firecho/cache/AbstractCacheProvider.html" target="_blank">
AbstractCacheProvider</a>
或者实现接口 <a href="/api/references/firecho/latest/com/firecho/cache/CacheProvider.html" target="_blank">
CacheProvider</a>

```java
package com.firecho.samples.cache;

import com.firecho.cache.AbstractCacheProvider;
import com.firecho.cache.exception.CacheException;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class TestCacheProvider extends AbstractCacheProvider {

  private String KEY_LIST = "cache:list";

  private String KEY_MAP = "cache:map";

  @Override
  protected void doLoad() throws CacheException {
    List<String> lists = new ArrayList<>();
    // 存入为list结构数据
    listOps().put(KEY_LIST, lists); 

    Map<String, String> maps = new HashMap<>(); // map数据
    maps.put("key1", "value1");
    maps.put("key2", "value2");
    // 存入为map结构数据
    mapOps().put(KEY_MAP, maps); 

    // 往map结构中添加值
    mapOps().put(KEY_MAP, "key3", "value3"); 
    
    // 设置自定义过期时间为120秒
    valueOps().put("key", "value", 120, TimeUnit.SECONDS);
  }

  // 获取整个list值
  public List<String> fetchList() {
    // cacheManager.listGet(KEY_LIST);
    return listOps().get(KEY_LIST);
  }

  // 获取整个map值
  public Map<String, String> fetchMap() {
    // cacheManager.mapGet(KEY_MAP); 
    return mapOps().get(KEY_MAP);
  }

  // 根据属性key获取值
  public String fetchMapByCode() {
    // cacheManager.mapGet(KEY_MAP, "key1");
    String value1 = mapOps().get(KEY_MAP, "key1");
    return value1;
  }
}
```

## 5. 刷新缓存

```java
package com.firecho.samples.cache;

import com.firecho.cache.AbstractCacheProvider;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class TestCacheRefresher {

    private TestCacheProvider testCacheProvider;

    public TestCacheRefresher(TestCacheProvider testCacheProvider) {
        this.testCacheProvider = testCacheProvider;
    }

    public void refresh() {
        // 刷新缓存
        testCacheProvider.refresh();
    }
}
```

## 6. 注意事项

`CacheManager` 中需要注意的是:

* `mapOps()` 只能操作 `map` 类型的缓存数据,
  具体定义查看<a href="/api/references/firecho/latest/com/firecho/cache/MapCacheOperation.html" target="_blank">
  MapCacheOperation接口</a>
* `listOps()` 只能操作 `list` 类型的缓存数据,
  具体定义查看<a href="/api/references/firecho/latest/com/firecho/cache/ListCacheOperation.html" target="_blank">
  ListCacheOperation接口</a>
* `valueOps()` 方法是操作通用类型数据,
  具体定义查看<a href="/api/references/firecho/latest/com/firecho/cache/ValueCacheOperation.html" target="_blank">
  ValueCacheOperation接口</a>