# 文章数据逻辑

![image-20210111142558879](http://mdrs.yuanjin.tech/img/20210111142558.png)

# 组件逻辑

![image-20210111140735985](/Users/yuanjin/Desktop/20210111140736.png)

## BlogDetail

该组件没有任何难度，根据「属性 - 文章对象」显示出文章信息即可

由于文章的内容属于**原始html**，因此需要使用`v-html`指令来设置

另外，文章的内容是不带样式的，因此需要选择一款`markdown`的`css`样式（见附件`markdown.css`）

对于文章中脚本部分的样式，可以使用第三方库[highlight.js](https://highlightjs.org/)中提供的样式

```js
import "highlight.js/styles/github.css";
```



## BlogTOC

无难度，不解释

## BlogComment

下节课讲解



