// // 入口文件
// import "./mock";
// import Vue from "vue";
// import App from "./App.vue";
// import "./styles/global.less";
// import router from "./router";
// import showMessage from "./utils/showMessage";
// Vue.prototype.$showMessage = showMessage;

// // 注册全局指令
// import vLoading from "./directives/loading";
// Vue.directive("loading", vLoading);

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");

// 测试事件总线
import eventBus from "./eventBus";

function handler1(data) {
  console.log("handler1", data);
}
function handler2(data) {
  console.log("handler2", data);
}
eventBus.$on("event1", handler1);
eventBus.$on("event1", handler2);
eventBus.$on("event2", handler1);

window.eventBus = eventBus;
window.handler1 = handler1;
window.handler2 = handler2;
