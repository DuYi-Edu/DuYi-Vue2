import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import User from "../views/User.vue";
import Loading from "../views/Loading.vue";
import News from "../views/News.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  { path: "/news", component: News, meta: { auth: true } },
  { path: "/loading", component: Loading },
  { path: "/login", component: Login },
  {
    path: "/user",
    component: User,
    meta: {
      auth: true,
    },
  },
];
