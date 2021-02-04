// 入口文件
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
