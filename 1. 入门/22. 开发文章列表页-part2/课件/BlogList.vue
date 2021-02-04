<template>
  <div class="blog-list-container">
    <ul>
      <li>
        <div class="thumb">
          <a href="">
            <img
              src="http://dummyimage.com/300x250/000/fff&amp;text=Random Image"
              alt="回书义常且音"
              title="回书义常且音"
            />
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>回书义常且音</h2>
          </a>
          <div class="aside">
            <span>日期：2009-8-29</span>
            <span>浏览：2278</span>
            <span>评论78</span>
            <a href="/article/cate/8" class="">分类8</a>
          </div>
          <div class="desc">
            同空能京南进安西完再支风飞严领光。得生这局月确位军们离存电。热建子光验复更度合确验前切声。
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
