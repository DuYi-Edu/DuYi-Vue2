> 面试题：请阐述`vue2`响应式原理

> vue官方阐述：https://cn.vuejs.org/v2/guide/reactivity.html

**响应式数据的最终目标**，是当对象本身或对象属性发生变化时，将会运行一些函数，最常见的就是render函数。

在具体实现上，vue用到了**几个核心部件**：

1. Observer
2. Dep
3. Watcher
4. Scheduler

# Observer

Observer要实现的目标非常简单，就是把一个普通的对象转换为响应式的对象

为了实现这一点，Observer把对象的每个属性通过`Object.defineProperty`转换为带有`getter`和`setter`的属性，这样一来，当访问或设置属性时，`vue`就有机会做一些别的事情。

<img src="http://mdrs.yuanjin.tech/img/20210226153448.png" alt="image-20210226153448807" style="zoom:50%;" />

Observer是vue内部的构造器，我们可以通过Vue提供的静态方法`Vue.observable( object )`间接的使用该功能。

在组件生命周期中，这件事发生在`beforeCreate`之后，`created`之前。

具体实现上，它会递归遍历对象的所有属性，以完成深度的属性转换。

由于遍历时只能遍历到对象的当前属性，因此无法监测到将来动态增加或删除的属性，因此`vue`提供了`$set`和`$delete`两个实例方法，让开发者通过这两个实例方法对已有响应式对象添加或删除属性。

对于数组，`vue`会更改它的隐式原型，之所以这样做，是因为vue需要监听那些可能改变数组内容的方法

<img src="http://mdrs.yuanjin.tech/img/20210226154624.png" alt="image-20210226154624015" style="zoom:50%;" />

总之，Observer的目标，就是要让一个对象，它属性的读取、赋值，内部数组的变化都要能够被vue感知到。

# Dep

这里有两个问题没解决，就是读取属性时要做什么事，而属性变化时要做什么事，这个问题需要依靠Dep来解决。

Dep的含义是`Dependency`，表示依赖的意思。

`Vue`会为响应式对象中的每个属性、对象本身、数组本身创建一个`Dep`实例，每个`Dep`实例都有能力做以下两件事：

- 记录依赖：是谁在用我
- 派发更新：我变了，我要通知那些用到我的人

当读取响应式对象的某个属性时，它会进行依赖收集：有人用到了我

当改变某个属性时，它会派发更新：那些用我的人听好了，我变了

<img src="http://mdrs.yuanjin.tech/img/20210226155852.png" alt="image-20210226155852964" style="zoom:50%;" />

# Watcher

这里又出现一个问题，就是Dep如何知道是谁在用我？

要解决这个问题，需要依靠另一个东西，就是Watcher。

当某个函数执行的过程中，用到了响应式数据，响应式数据是无法知道是哪个函数在用自己的

因此，vue通过一种巧妙的办法来解决这个问题

我们不要直接执行函数，而是把函数交给一个叫做watcher的东西去执行，watcher是一个对象，每个这样的函数执行时都应该创建一个watcher，通过watcher去执行

watcher会设置一个全局变量，让全局变量记录当前负责执行的watcher等于自己，然后再去执行函数，在函数的执行过程中，如果发生了依赖记录`dep.depend()`，那么`Dep`就会把这个全局变量记录下来，表示：有一个watcher用到了我这个属性

当Dep进行派发更新时，它会通知之前记录的所有watcher：我变了

<img src="http://mdrs.yuanjin.tech/img/20210226161404.png" alt="image-20210226161404327" style="zoom:50%;" />

每一个`vue`组件实例，都至少对应一个`watcher`，该`watcher`中记录了该组件的`render`函数。

`watcher`首先会把`render`函数运行一次以收集依赖，于是那些在render中用到的响应式数据就会记录这个watcher。

当数据变化时，dep就会通知该watcher，而watcher将重新运行render函数，从而让界面重新渲染同时重新记录当前的依赖。

# Scheduler

现在还剩下最后一个问题，就是Dep通知watcher之后，如果watcher执行重运行对应的函数，就有可能导致函数频繁运行，从而导致效率低下

试想，如果一个交给watcher的函数，它里面用到了属性a、b、c、d，那么a、b、c、d属性都会记录依赖，于是下面的代码将触发4次更新：

```js
state.a = "new data";
state.b = "new data";
state.c = "new data";
state.d = "new data";
```

这样显然是不合适的，因此，watcher收到派发更新的通知后，实际上不是立即执行对应函数，而是把自己交给一个叫调度器的东西

调度器维护一个执行队列，该队列同一个watcher仅会存在一次，队列中的watcher不是立即执行，它会通过一个叫做`nextTick`的工具方法，把这些需要执行的watcher放入到事件循环的微队列中，nextTick的具体做法是通过`Promise`完成的

> nextTick 通过 `this.$nextTick` 暴露给开发者
>
> nextTick 的具体处理方式见：https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97

也就是说，当响应式数据变化时，`render`函数的执行是异步的，并且在微队列中

# 总体流程

![image-20210226163936839](http://mdrs.yuanjin.tech/img/20210226163936.png)

