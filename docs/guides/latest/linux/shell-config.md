---
title: Shell配置
---

## 1. dask-to-shell

例如在ubuntu系统中,默认的`shell`环境为`dash`,常用的脚本以`bash`为运行环境,会导致兼容性错误而运行失败.

:::code-group

```shell [Ubuntu]
dpkg-reconfigure dash
```

:::

在弹出的选项框中选择 `no`