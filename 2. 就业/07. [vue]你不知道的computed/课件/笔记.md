> 面试题：computed和methods有什么区别

**标准而浅显的回答**

> 1. 在使用时，computed当做属性使用，而methods则当做方法调用
> 2. computed可以具有getter和setter，因此可以赋值，而methods不行
> 3. computed无法接收多个参数，而methods可以
> 4. computed具有缓存，而methods没有

**更接近底层原理的回答**

> vue对methods的处理比较简单，只需要遍历methods配置中的每个属性，将其对应的函数使用bind绑定当前组件实例后复制其引用到组件实例中即可
>
> 而vue对computed的处理会稍微复杂一些。
>
> 当组件实例触发生命周期函数`beforeCreate`后，它会做一系列事情，其中就包括对computed的处理
>
> 它会遍历computed配置中的所有属性，为每一个属性创建一个Watcher对象，并传入一个函数，该函数的本质其实就是computed配置中的getter，这样一来，getter运行过程中就会收集依赖
>
> 但是和渲染函数不同，为计算属性创建的Watcher不会立即执行，因为要考虑到该计算属性是否会被渲染函数使用，如果没有使用，就不会得到执行。因此，在创建Watcher的时候，它使用了lazy配置，lazy配置可以让Watcher不会立即执行。
>
> 收到`lazy`的影响，Watcher内部会保存两个关键属性来实现缓存，一个是`value`，一个是`dirty`
>
> `value`属性用于保存Watcher运行的结果，受`lazy`的影响，该值在最开始是`undefined`
>
> `dirty`属性用于指示当前的`value`是否已经过时了，即是否为脏值，受`lazy`的影响，该值在最开始是`true`
>
> Watcher创建好后，vue会使用代理模式，将计算属性挂载到组件实例中
>
> 当读取计算属性时，vue检查其对应的Watcher是否是脏值，如果是，则运行函数，计算依赖，并得到对应的值，保存在Watcher的value中，然后设置dirty为false，然后返回。
>
> 如果dirty为false，则直接返回watcher的value
>
> 巧妙的是，在依赖收集时，被依赖的数据不仅会收集到计算属性的Watcher，还会收集到组件的Watcher
>
> 当计算属性的依赖变化时，会先触发计算属性的Watcher执行，此时，它只需设置`dirty`为true即可，不做任何处理。
>
> 由于依赖同时会收集到组件的Watcher，因此组件会重新渲染，而重新渲染时又读取到了计算属性，由于计算属性目前已为dirty，因此会重新运行getter进行运算
>
> 而对于计算属性的setter，则极其简单，当设置计算属性时，直接运行setter即可