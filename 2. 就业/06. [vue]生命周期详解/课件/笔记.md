> 面试题：`new Vue`之后，发生了什么？数据改变后，又发生了什么？

<img src="http://mdrs.yuanjin.tech/img/20210302155735.png" alt="image-20210302155735758" style="zoom: 33%;" />

1. 创建vue实例和创建组件的流程基本一致

   1. 首先做一些初始化的操作，主要是设置一些私有属性到实例中

   2. **运行生命周期钩子函数`beforeCreate`**

   3. 进入注入流程：处理属性、computed、methods、data、provide、inject，最后使用代理模式将它们挂载到实例中

   4. **运行生命周期钩子函数`created`**

   5. 生成`render`函数：如果有配置，直接使用配置的`render`，如果没有，使用运行时编译器，把模板编译为`render`

   6. **运行生命周期钩子函数`beforeMount`**

   7. 创建一个`Watcher`，传入一个函数`updateComponent`，该函数会运行`render`，把得到的`vnode`再传入`_update`函数执行。

      在执行`render`函数的过程中，会收集所有依赖，将来依赖变化时会重新运行`updateComponent`函数

      在执行`_update`函数的过程中，触发`patch`函数，由于目前没有旧树，因此直接为当前的虚拟dom树的每一个普通节点生成elm属性，即真实dom。

      如果遇到创建一个组件的vnode，则会进入组件实例化流程，该流程和创建vue实例流程基本相同，最终会把创建好的组件实例挂载vnode的`componentInstance`属性中，以便复用。
      
   8. **运行生命周期钩子函数`mounted`**
   
2. 重渲染？

   1. 数据变化后，所有依赖该数据的`Watcher`均会重新运行，这里仅考虑`updateComponent`函数对应的`Watcher`

   2. `Watcher`会被调度器放到`nextTick`中运行，也就是微队列中，这样是为了避免多个依赖的数据同时改变后被多次执行

   3. **运行生命周期钩子函数`beforeUpdate`**

   4. `updateComponent`函数重新执行

      在执行`render`函数的过程中，会去掉之前的依赖，重新收集所有依赖，将来依赖变化时会重新运行`updateComponent`函数

      在执行`_update`函数的过程中，触发`patch`函数。

      新旧两棵树进行对比。

      普通`html`节点的对比会导致真实节点被创建、删除、移动、更新

      组件节点的对比会导致组件被创建、删除、移动、更新

      当新组件需要创建时，进入实例化流程

      当旧组件需要删除时，会调用旧组件的`$destroy`方法删除组件，该方法会先触发**生命周期钩子函数`beforeDestroy`**，然后递归调用子组件的`$destroy`方法，然后触发**生命周期钩子函数`destroyed`**

      当组件属性更新时，相当于组件的`updateComponent`函数被重新触发执行，进入重渲染流程，和本节相同。
      
   5. **运行生命周期钩子函数`updated`**

​      


​      