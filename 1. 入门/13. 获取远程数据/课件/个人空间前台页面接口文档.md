# 概述

**服务器的所有接口均不允许跨域**

所有的服务端接口在接收到请求后，均响应以下JSON格式：

```json
{
  "code": 0, // 错误码
  "msg": "", // 错误消息
  "data": null // 具体的消息内容，如果code不为0，则必为null
}
```

其中，`code`、`msg`、`data`对应的结果如下：

| code                      | msg                                                  | data           |
| ------------------------- | ---------------------------------------------------- | -------------- |
| 0：无错误                 | ""                                                   | 具体的业务结果 |
| 406: 验证失败             | 具体验证错误的错误消息，如：<br />"评论内容不能为空" | null           |
| 500: 服务器内部的未知错误 | "服务器内部错误"                                     | null           |



# 接口规格

## 全局设置

全局设置是单例的，服务器启动时，如果没有全局设置，则会初始化一个默认的全局设置：

```yaml
{
	avatar: "http://www.duyiedu.com/source/img/logo.png", #个人空间的头像
  siteTitle: "我的个人空间", #个人空间的标题
  github: "https://github.com/DuYi-Edu", #空间主人的github地址
  qq: "3263023350", #空间主人的qq号
  qqQrCode:  "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png", #空间主人的qq二维码
    weixin: "yh777bao", #空间主人的微信
    weixinQrCode:      "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png", #空间主人的微信二维码
  mail: "duyi@gmail.com", #空间主人的邮箱
  icp: "黑ICP备17001719号", #空间主人的备案号
  githubName: "DuYi-Edu", #空间主人的github名称
  favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f", #网站的favicon地址
}
```



### 获取全局设置

**请求规格：**

```yaml
path: /api/setting
method: GET
```

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
    avatar: "http://www.duyiedu.com/source/img/logo.png", 
    siteTitle: "我的个人空间", 
    github: "https://github.com/DuYi-Edu", 
    qq: "3263023350",
    qqQrCode:  "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png", 
    weixin: "yh777bao", 
    weixinQrCode:      "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "duyi@gmail.com", 
    icp: "黑ICP备17001719号", 
    githubName: "DuYi-Edu", 
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
	}
}
```



## 博客文章

### 获取所有博客分类

**请求规格：**

```yaml
path: /api/blogtype
method: GET
```



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: [{
    id: <id>,
    name: "分类1",
    articleCount: 10, #该分类下文章的数量
    order: 1
	}, {
    id: <id>,
    name: "分类2",
    articleCount: 10, #该分类下文章的数量
    order: 2
	}, {
    id: <id>,
    name: "分类3",
    articleCount: 10, #该分类下文章的数量
    order: 3
	}
}]
```

说明：

- 分类列表应该按照order的顺序排序好

### 分页获取博客

**请求规格：**

```yaml
path: /api/blog
method: GET
```

说明：

- params列表：

  | key        | 必填 | default | 含义 |
  | ---------- | ----- | ------- | ---------- |
  | page       | 否 | 1 | 当前页码 |
  | limit      | 否 | 10 | 页容量 |
  | categoryid | 否 | -1 | 所属分类，-1表示全部 |
| keyword | 否 | 空字符串 | 模糊查询的关键字 |
  
  

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: { 
		total: 786, #总数
		rows: [ # 当前页列表数据
			{
				id:<id>,
				title: "标题",
				description: "描述",
				category: { #所属分类
					id: 3,
					name: "分类3"
				},
				scanNumber: 10,
				commentNumber: 30,
				thumb: "缩略图地址",
				createDate: 1604976798936
			}
		]
	}
```

说明：

- 结果按照创建时间的倒序排序

### 获取单个博客

**请求规格：**

```yaml
path: /api/blog/:id
method: GET
```

说明：

- `:id`为博客的id

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: { 
		id: <id>,
    title: "博客标题",
    category: {
    	id: 1,
    	name:"分类3"
    },
    scanNumber: 0, #浏览次数
    commentNumber: 0, #评论数
    description: "博客描述，显示到列表页",
    createDate: 1604976798936, #时间戳，创建日期
    toc:  [ # 博客章节目录
      { name: "章节1", anchor: "title-1" },
      {
        name: "章节2",
        anchor: "title-2",
        children: [
          { name: "章节2-1", anchor: "title-2-1" },
          { name: "章节2-2", anchor: "title-2-2" },
        ],
      },
      {
        name: "章节3",
        anchor: "title-3",
      },
    ],
    htmlContent: "....", #博客的html内容
    thumb: "缩略图地址"
	}
```



### 提交评论

**请求规格：**

```yaml
path: /api/comment
method: POST
body: {
	nickname: "昵称",
	content: "评论内容，纯文本",
	blogId: <id>	#评论的博客id
}
```



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
    id: <id>,
    nickname: "昵称",
    content: "评论内容，纯文本",
    blog: {
    	id: <id>, # 博客id
    	title: "博客标题"
    }
    createDate: 1604976798936,
    avatar: "随机的头像地址",
	}
}
```

说明：

- 有可能出现验证错误，如：

  - 昵称不能为空
  - 评论内容不能为空
  - ...

- 头像随机生成一个即可

- 某个会话在一定的时间内，只能指定数量的评论，超出数量将导致406验证错误：

  ```yaml
  {
  	code: 406,
  	msg: "评论过于频繁，请稍后再试"
  }
  ```

### 分页获取评论

**请求规格：**

```yaml
path: /api/comment
method: GET
```

说明：

- params列表：

  | key     | 必填 | default  | 含义                 |
  | ------- | ---- | -------- | -------------------- |
  | page    | 否   | 1        | 当前页码             |
  | limit   | 否   | 10       | 页容量               |
  | blogid  | 否   | -1       | 所属文章，-1表示不限 |
  | keyword | 否   | 空字符串 | 模糊查询的关键字     |

  

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: { 
		total: 786, #总数
		rows: [ # 当前页列表数据
			{
        id: <id>,
        nickname: "昵称",
        content: "评论内容，纯文本",
        blog: {
          id: <id>, # 博客id
          title: "博客标题"
        }
        createDate: 1604976798936,
        avatar: "头像地址",
      }
		]
	}
```

说明：

- 结果按照创建时间的倒序排序

## 首页标语

### 获取标语

**请求规格：**

```yaml
path: /api/banner
method: GET
```

**响应规格：**

```yaml
[
  {
    id: "1",
    midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
    bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
    title: "凛冬将至",
    description: "人唯有恐惧的时候方能勇敢",
  },
  {
    id: "2",
    midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
    bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
    title: "血火同源",
    description: "如果我回头，一切都完了",
  },
  {
    id: "3",
    midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
    bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
    title: "听我怒吼",
    description: "兰尼斯特有债必偿",
  },
]

```

## 关于页面

### 获取「关于我」页面

**请求规格：**

```yaml
path: /api/about
method: GET
```

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: "http://skill.phodal.com/#_rs2tu_1_Name"
}
```



## 留言板

### 提交留言

**请求规格：**

```yaml
path: /api/message
method: POST
body: {
	nickname: "昵称",
	content: "留言内容，纯文本"
}
```



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
    id: <id>,
    nickname: "昵称",
    content: "留言内容，纯文本",
    createDate: 1604976798936,
    avatar: "随机的头像地址",
	}
}
```

说明：

- 有可能出现验证错误，如：

  - 昵称不能为空
  - 留言内容不能为空
  - ...

- 头像随机生成一个即可

- 某个会话在一定的时间内，只能提交指定数量的留言，超出数量将导致406验证错误：

  ```yaml
  {
  	code: 406,
  	msg: "留言过于频繁，请稍后再试"
  }
  ```

### 分页获取留言

**请求规格：**

```yaml
path: /api/message
method: GET
```

说明：

- params列表：

  | key     | 必填 | default  | 含义             |
  | ------- | ---- | -------- | ---------------- |
  | page    | 否   | 1        | 当前页码         |
  | limit   | 否   | 10       | 页容量           |
  | keyword | 否   | 空字符串 | 模糊查询的关键字 |

  

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: { 
		total: 786, #总数
		rows: [ # 当前页列表数据
			{
        id: <id>,
        nickname: "昵称",
        content: "留言内容，纯文本",
        createDate: 1604976798936,
        avatar: "头像地址",
      }
		]
	}
```

说明：

- 结果按照创建时间的倒序排序

## 项目&demo

### 获取所有项目

**请求规格：**

```yaml
path: /api/project
method: GET
```



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: [
    {
      id: <id>,
      name: "个人博客系统",
      url: "...",
      github: "...",
      description: ["...", "..."],
      thumb: "...",
      order: 1
    },
    {
      id: <id>,
      name: "像素鸟",
      url: "...",
      github: "...",
      description: ["...", "..."],
      thumb: "...",
      order: 2
    },
  ]
}
```

说明：

- 结果按照order的顺序排序
