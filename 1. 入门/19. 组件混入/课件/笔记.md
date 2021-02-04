有的时候，许多组件有着类似的功能，这些功能代码分散在组件不同的配置中。

![image-20210105161811637](http://mdrs.yuanjin.tech/img/20210105161811.png)

于是，我们可以把这些配置代码抽离出来，利用**混入**融合到组件中。

![image-20210105162109015](http://mdrs.yuanjin.tech/img/20210105162109.png)

具体的做法非常简单：

```js
// 抽离的公共代码
const common = {
  data(){
    return {
      a: 1,
      b: 2
    }
  },
  created(){
    console.log("common created");
  },
  computed:{
    sum(){
      return this.a + this.b;
    }
  }
}

/**
 * 使用comp1，将会得到：
 * common created
 * comp1 created 1 2 3
 */
const comp1 = {
  mixins: [common] // 之所以是数组，是因为可以混入多个配置代码
  created(){
    console.log("comp1 created", this.a, this.b, this.sum);
  }
}
```

混入并不复杂，更多细节参见[官网](https://cn.vuejs.org/v2/guide/mixins.html)

