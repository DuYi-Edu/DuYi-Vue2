# pager组件

<img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;" />

## 属性

| 属性名        | 含义       | 类型   | 必填 | 默认值 |
| ------------- | ---------- | ------ | ---- | ------ |
| current       | 当前页码   | Number | 否   | 1      |
| total         | 总数据量   | Number | 否   | 0      |
| limit         | 页容量     | Number | 否   | 10     |
| visibleNumber | 可见页码数 | Number | 否   | 10     |

## 事件

| 事件名     | 含义     | 事件参数 | 参数类型 |
| ---------- | -------- | -------- | -------- |
| pageChange | 页码变化 | 新的页码 | Number   |

# 知识点

1. **全局样式**

2. **v-if 和 v-show**

   ![image-20201113133827438](http://mdrs.yuanjin.tech/img/20201113133827.png)

   -------

   ![image-20201113134051281](http://mdrs.yuanjin.tech/img/20201113134051.png)

   **面试题：v-if 和 v-show 有什么区别？**

   ```
   v-if能够控制是否生成vnode，也就间接控制了是否生成对应的dom。当v-if为true时，会生成对应的vnode，并生成对应的dom元素；当其为false时，不会生成对应的vnode，自然不会生成任何的dom元素。
   v-show始终会生成vnode，也就间接导致了始终生成dom。它只是控制dom的display属性，当v-show为true时，不做任何处理；当其为false时，生成的dom的display属性为none。
   使用v-if可以有效的减少树的节点和渲染量，但也会导致树的不稳定；而使用v-show可以保持树的稳定，但不能减少树的节点和渲染量。
   因此，在实际开发中，显示状态变化频繁的情况下应该使用v-show，以保持树的稳定；显示状态变化较少时应该使用v-if，以减少树的节点和渲染量。
   ```

   

3. **组件事件**

   <img src="http://mdrs.yuanjin.tech/img/20201113134557.png" alt="image-20201113134557175" style="zoom:40%;" />

   抛出事件：子组件在某个时候发生了一件事，但自身无法处理，于是通过事件的方式通知父组件处理

   事件参数：子组件抛出事件时，传递给父组件的数据

   注册事件：父组件申明，当子组件发生某件事的时候，自身将做出一些处理



