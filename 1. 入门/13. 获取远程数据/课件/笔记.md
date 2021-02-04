> 本节课内容和vue没有任何关系！
>
> vue cli: https://cli.vuejs.org/zh/
>
> axios: https://github.com/axios/axios
>
> mockjs：http://mockjs.com/

# 远程获取数据的意义

<img src="http://mdrs.yuanjin.tech/img/20201204145137.png" alt="image-20201204145137500" style="zoom:40%;" />

# 开发环境有跨域问题

```mermaid
sequenceDiagram
浏览器->>前端开发服务器: http://localhost:8080/
前端开发服务器->>浏览器: 页面
浏览器->>后端测试服务器: ajax 跨域：http://test-data:3000/api/news
后端测试服务器->>浏览器: JSON数据
rect rgb(224,74,74)
Note right of 浏览器: 浏览器阻止数据移交
end
```

# 生产环境没有跨域问题

```mermaid
sequenceDiagram
浏览器->>服务器: http://www.my-site.com/
服务器->>浏览器: 页面
浏览器->>服务器: ajax：http://www.my-site.com/api/news
服务器->>浏览器: JSON数据
```

```mermaid
sequenceDiagram
浏览器->>静态资源服务器: http://www.my-site.com/
静态资源服务器->>浏览器: 页面
浏览器->>数据服务器: ajax 跨域：http://api.my-site.com/api/news
数据服务器->>浏览器: [允许www.my-site.com]JSON数据
```

# 解决开发环境的跨域问题

```mermaid
sequenceDiagram
浏览器->>前端开发服务器: http://localhost:8080/
前端开发服务器->>浏览器: 页面
浏览器->>前端开发服务器: ajax：http://localhost:8080/api/news
前端开发服务器->>后端测试服务器: 代理请求：http://test-data:3000/api/news
后端测试服务器->>前端开发服务器: JSON数据
前端开发服务器->>浏览器: JSON数据
```

# 为什么要Mock数据

```mermaid
sequenceDiagram
浏览器->>前端开发服务器: http://localhost:8080/
前端开发服务器->>浏览器: 页面
浏览器->>前端开发服务器: ajax：http://localhost:8080/api/news
前端开发服务器->>后端测试服务器: 代理请求：http://test-data:3000/api/news
后端测试服务器->>前端开发服务器: 404 （后端正在开发中）
前端开发服务器->>浏览器: 404
```

```mermaid
sequenceDiagram
participant 浏览器
participant MockJS
participant 前端开发服务器
activate MockJS
Note left of MockJS: 定义ajax拦截规则
deactivate MockJS
浏览器->>前端开发服务器: http://localhost:8080/
前端开发服务器->>浏览器: 页面
浏览器->>MockJS: ajax：http://localhost:8080/api/news
MockJS->>浏览器: 模拟的JSON数据
```

