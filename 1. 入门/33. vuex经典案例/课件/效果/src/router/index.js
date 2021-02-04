import VueRouter from "vue-router";
import routes from "./routes";
import Vue from "vue";
import store from "../store";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeResolve((to, from, next) => {
  console.log(123);
  if (to.meta.auth) {
    const status = store.getters["loginUser/status"];
    if (status === "loading") {
      next({
        path: "/loading",
        query: {
          returnurl: to.fullPath,
        },
      });
      return;
    } else if (status === "unlogin") {
      alert("你没有登录，请先登录");
      next({
        path: "/login",
        query: {
          returnurl: to.fullPath,
        },
      });
      return;
    }
  }
  next();
});

export default router;
