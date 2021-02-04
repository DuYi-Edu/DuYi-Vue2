# 异步组件

在代码层面，`vue`组件本质上是一个配置对象

```js
var comp = {
  props: xxx,
  data: xxx,
  computed: xxx,
  methods: xxx
}
```

但有的时候，要得到某个组件配置对象需要一个异步的加载过程，比如：

- 需要使用ajax获得某个数据之后才能加载该组件
- 为了合理的分包，组件配置对象需要通过`import(xxx)`动态加载

如果一个组件**需要通过异步的方式得到组件配置对象**，该组件可以把它做成一个异步组件

```js
/**
 * 异步组件本质上是一个函数
 * 该函数调用后返回一个Promise，Promise成功的结果是一个组件配置对象
 */
const AsyncComponent = () => import("./MyComp")

var App = {
  components: {
    /**
     * 你可以把该函数当做一个组件使用（异步组件）
     * Vue会调用该函数，并等待Promise完成，完成之前该组件位置什么也不渲染
     */
    AsyncComponent 
  }
}
```

> 异步组件的函数不仅可以返回一个Promise，还支持返回一个对象
>
> 详见：[返回对象格式的异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%A4%84%E7%90%86%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81)

# 应用

异步组件通常应用在路由懒加载中，以达到更好的分包

为了提高用户体验，可以在组件配置对象加载完成之前给用户显示一些提示信息

```js
var routes = [
  { path: "/", component: async () => {
    console.log("组件开始加载"); 
    const HomeComp = await import("./Views/Home.vue");
    console.log("组件加载完毕");
    return HomeComp;
  } }
]
```

推荐使用[NProgress](https://github.com/rstacruz/nprogress)展现一个进度条

