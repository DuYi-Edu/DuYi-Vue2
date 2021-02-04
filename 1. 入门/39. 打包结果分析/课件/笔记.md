# 分析打包结果

由于`vue-cli`是利用`webpack`进行打包，我们仅需加入一个`webpack`插件`webpack-bundle-analyzer`即可分析打包结果

为了避免在开发环境中启动`webpack-bundle-analyzer`，我们仅需使用以下代码即可

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
// vue.config.js
module.exports = {
  // 通过 configureWebpack 选项，可对 webpack 进行额外的配置
  // 该配置最终会和 vue-cli 的默认配置进行合并（webpack-merge）
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  },
};
```

# 优化公共库打包体积

## 使用CDN

CDN全称为Content Delivery Network，称之为内容分发网络

它的基本原理是：架设多台服务器，这些服务器定期从源站拿取资源保存本地，到让不同地域的用户能够通过访问最近的服务器获得资源

![img](http://mdrs.yuanjin.tech/img/20210203133956.png)

我们可以把项目中的所有静态资源都放到CDN上（收费），也可以利用现成免费的CDN获取公共库的资源

<img src="http://mdrs.yuanjin.tech/img/20210203140030.png" alt="image-20210203140029967" style="zoom:50%;" />

首先，我们需要告诉`webpack`不要对公共库进行打包

```js
// vue.config.js
module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
    }
  },
};
```

然后，在页面中手动加入`cdn`链接，这里使用[bootcn](https://www.bootcdn.cn/)

```html
<body>
  <div id="app"></div>
  <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.7/vue-router.min.js"></script>
  <!-- built files will be auto injected -->
</body>
```

对于`vuex`和`vue-router`，使用这种传统的方式引入的话会自动成为`Vue`的插件，因此需要去掉`Vue.use(xxx)`

我们可以使用下面的代码来进行兼容

```js
// store.js
import Vue from "vue";
import Vuex from "vuex";

if(!window.Vuex){
  // 没有使用传统的方式引入Vuex
  Vue.use(Vuex);
}

// router.js
import VueRouter from "vue-router";
import Vue from "vue";

if(!window.VueRouter){
  // 没有使用传统的方式引入VueRouter
  Vue.use(VueRouter);
}
```



## 启用现代模式

为了兼容各种浏览器，`vue-cli`在内部使用了`@babel/present-env`对代码进行降级，你可以通过`.browserlistrc`配置来设置需要兼容的目标浏览器

这是一种比较*偷懒*的办法，因为对于那些使用现代浏览器的用户，它们也*被迫*使用了降级之后的代码，而降低的代码中包含了大量的`polyfill`，从而提升了包的体积

因此，我们希望提供两种打包结果：

1. 降级后的包（大），提供给旧浏览器用户使用
2. 未降级的包（小），提供给现代浏览器用户使用

除了应用`webpack`进行多次打包外，还可以利用`vue-cli`给我们提供的命令：

```shell
vue-cli-service build --modern
```



# 优化项目包体积

这里的项目包是指`src`目录中的打包结果

## 页面分包

默认情况下，`vue-cli`会利用`webpack`将`src`目录中的所有代码打包成一个`bundle`

这样就导致访问一个页面时，需要加载所有页面的`js`代码

我们可以利用`webpack`对`动态import`的支持，从而达到把不同页面的代码打包到不同文件中

```js
// routes
export default [
  {
    name: "Home",
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import(/* webpackChunkName: "about" */"@/views/About"),
  }
];
```

# 优化首屏响应

> 首页白屏受很多因素的影响

`vue`页面需要通过`js`构建，因此在`js`下载到本地之前，页面上什么也没有

一个非常简单有效的办法，即在页面中先渲染一个小的加载中效果，等到`js`下载到本地并运行后，即会自动替换

```html
<div id="app">
  <img src="loading.gif" />
</div>
```

