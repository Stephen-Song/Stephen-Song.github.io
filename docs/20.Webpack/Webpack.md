---
title: Webpack
date: 2022-02-04 15:04:21
permalink: /pages/d02fd9/
---

# Webpack

## 请简述一下`HMR`的原理

1. 使用 `webpack-dev-server` (后面简称 `WDS`)托管静态资源，同时以 `Runtime` 方式注入 `HMR` 客户端代码
2. 浏览器加载页面后，与 `WDS` 建立 `WebSocket` 连接
3. `Webpack` 通过`compile`类的`run`方法开启编译构建过程，调用`Watch`方法监听到文件变化后，增量构建发生变更的模块，并通过 `WebSocket` 发送 `hash` 事件
4. 浏览器接收到 `hash` 事件后，请求 `manifest` 资源文件，确认增量变更范围
5. 浏览器加载发生变更的增量模块
6. `Webpack` 运行时触发变更模块的 `module.hot.accept` 回调，执行代码变更逻辑

**那么`webpack`服务器和浏览器端是怎么建立起通信的？**

:::note EventStream 事件流

服务器端事件流，服务器向浏览器推送消息，除了 `websocket` 全双工通道双向通信方式还有一种 `Server-Sent Events` 单向通道的通信方法，只能服务器端向浏览器端通过流信息的方式推送消息；页面可以通过 `EventSource` 实例接收服务器发送事件通知并触发 `onmessage` 事件），并且以 `2s` 的频率不停的更新消息内容，每行消息内容都有 ❤️ 的图标，没错这就是一个心跳请求。

:::
