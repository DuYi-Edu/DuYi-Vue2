// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// 随便测试一下
import * as blogApi from "./api/blog";

blogApi.getBlogTypes().then((r) => {
  console.log("博客分类", r);
});

blogApi.getBlogs(2, 10, 3).then((r) => {
  console.log("博客", r);
});
