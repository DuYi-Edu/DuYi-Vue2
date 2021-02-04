# 组件生命周期

<img src="http://mdrs.yuanjin.tech/img/20200908051939.png" alt="image-20200908051939745" style="zoom:50%;" />

<img src="http://mdrs.yuanjin.tech/img/20201206132819.png" alt="image-20201206132819263" style="zoom:50%;" />

# 常见应用

> 不要死记硬背，要根据具体情况灵活处理

## 加载远程数据

```js
export default {
  data(){
    return {
      news: []
    }
  },
  async created(){
    this.news = await getNews();
  }
}
```

## 直接操作DOM

```js
export default {
  data(){
    return {
      containerWidth:0,
    	containerHeight:0
    }
  },
  mounted(){
    this.containerWidth = this.$refs.container.clientWidth;
    this.containerHeight = this.$refs.container.containerHeight;
  }
}
```

## 启动和清除计时器

```js
export default {
  data(){
    return {
      timer: null
    }
  },
  created(){
    this.timer = setInterval(()=>{
     ... 
    }, 1000)
  },
  destroyed(){
    clearInterval(this.timer);               
  }
}
```

