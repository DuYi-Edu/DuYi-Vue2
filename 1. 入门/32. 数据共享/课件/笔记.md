![image-20210126132906004](http://mdrs.yuanjin.tech/img/20210126132906.png)

在`vue`中遇到**共享数据**，会带来下面的多个问题：

- 如何保证数据的唯一性？
  - 如果数据不唯一，则会浪费大量的内存资源，降低运行效率
  - 如果数据不唯一，就可能出现不统一的数据，难以维护
- 某个组件改动数据后，如何让其他用到该数据的组件知道数据变化了？
  - 事件总线貌似可以解决该问题，但需要在组件中手动的维护监听，极其不方便，而且事件总线的目的在于「通知」，而不是「共享数据」

一种比较容易想到的方案，就是把所有的共享数据**全部**提升到根组件，然后通过属性不断下发，当某个组件需要修改数据时，又不断向上抛出事件，直到根组件完成对数据的修改。

![image-20210126133905451](http://mdrs.yuanjin.tech/img/20210126133905.png)

这种方案的缺陷也非常明显：

- 需要编写大量的代码层层下发数据，很多组件被迫拥有了自己根本不需要的数据
- 需要编写大量的代码层层上抛事件，很多组件被迫注册了自己根本处理不了的事件



基于上面的问题，我们可以简单的设置一个**独立的数据仓库**。

![image-20210126140353891](http://mdrs.yuanjin.tech/img/20210126140353.png)

- 组件需要什么共享数据，可以自由的从仓库中获取，需要什么拿什么。

- 组件可以自由的改变仓库中的数据，仓库的数据变化后，会自动通知用到对应数据的组件更新

要实现这一切，可以选择`vuex`

# 创建仓库

安装`vuex`后，可以通过下面的代码创建一个数据仓库，在大部分情况下，一个工程仅需创建一个数据仓库

```js
import Vuex from "vue";
import Vue from "vue";
Vue.use(Vuex); // 应用vuex插件
const store = new Vuex.Store({
  // 仓库的配置
  state: { // 仓库的初始状态（数据）
    count: 0
  }
})

export default store;
```

仓库创建好后，你可以使用`store.state`来访问仓库中的数据

如果希望在`vue`中方便的使用仓库数据，需要将`vuex`作为插件安装

```js
// store.js
import Vuex from "vue";
import Vue from "vue";
Vue.use(Vuex); // 安装Vuex插件
const store = new Vuex({
  // 仓库的配置
  state: { // 仓库的初始状态（数据）
    count: 0
  }
})

export default store;

// main.js
import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
new Vue({
  store, // 向vue中注入仓库
  render: h => h(App)
}).$mount("#app");
```

之后，在`vue`组件中，可以通过实例的`$store`属性访问到仓库

`Vuex`会自动将配置的状态数据设置为响应式数据，当数据变化时，依赖该数据的组件会自动渲染。

# 数据的变更

尽管可以利用数据响应式的特点直接变更数据，但这样的做法在大型项目中会遇到问题

> 如果有一天，你发现某个共享数据是错误的，而有一百多个组件都有可能变更过这块数据，你该如何知道是哪一步数据变更出现了问题？

为了能够更好的跟踪数据的变化，`vuex`强烈建议使用`mutation`来更改数据

```js
const store = new Vuex({
  // 仓库的配置
  state: { // 仓库的初始状态（数据）
    count: 0
  },
  mutations: {
    /**
     * 每个mutation是一个方法，它描述了数据在某种场景下的变化
     * increase mutation描述了数据在增加时应该发生的变化
     * 参数state为当前的仓库数据
     */
    increase(state){
      state.count++;
    },
    decrease(state){
      state.count--;
    },
    /**
     * 求n次幂
     * 该mutation需要一个额外的参数来提供指数
     * 我们把让数据产生变化时的附加信息称之为负荷（负载） payload
     * payload可以是任何类型，数字、字符串、对象均可
     * 在该mutation中，我们约定payload为一个数字，表示指数
     */
    power(state, payload){
      state.count **= payload;
    }
  }
})
```

当我们有了`mutation`后，就不应该直接去改动仓库的数据了

而是通过`store.commit`方法提交一个`mutation`，具体做法是

```js
store.commit("mutation的名字", payload);
```

现在，我们可以通过`vue devtools`观测到数据的变化了

**特别注意： **

1. `mutation`中不得出现异步操作

   > 在实际开发的规范中，甚至要求不得有副作用操作
   >
   > 副作用操作包括：
   >
   > - 异步
   > - 更改或读取外部环境的信息，例如`localStorage、location、DOM`等

2. 提交`mutation`是数据改变的**唯一原因**

<img src="http://mdrs.yuanjin.tech/img/20210129151639.png" alt="image-20210129151639301" style="zoom: 50%;" />

# 异步处理

如果在`vuex`中要进行异步操作，需要使用`action`

```js
const store = new Vuex({
  state: { 
    count: 0
  },
  mutations: {
    increase(state){
      state.count++;
    },
    decrease(state){
      state.count--;
    },
    power(state, payload){
      state.count **= payload;
    }
  },
  actions: {
    /**
     * ctx: 类似于store的对象
     * payload: 本次异步操作的额外信息
     */
    asyncPower(ctx, payload){
      setTimeout(function(){
        ctx.commit("power", payload)
      }, 1000)
    }
  }
})
```

<img src="http://mdrs.yuanjin.tech/img/20210129160320.png" alt="image-20210129160320025" style="zoom:50%;" />