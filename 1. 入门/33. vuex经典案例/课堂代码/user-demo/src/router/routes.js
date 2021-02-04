import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import News from "../views/News.vue";
import User from "../views/User.vue";
import Loading from "../views/Loading.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  { path: "/loading", component: Loading },
  {
    path: "/news",
    component: News,
    meta: {
      auth: true,
    },
  },
  { path: "/login", component: Login },
  {
    path: "/user",
    component: User,
    meta: {
      auth: true,
    },
  },
];
