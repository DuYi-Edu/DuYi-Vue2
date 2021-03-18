import Vue from 'vue';
import VueRouter from 'vue-router';
import page1 from '../views/page1.vue';
import page2 from '../views/page2.vue';
import page3 from '../views/page3.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/page1',
    name: page1.name,
    component: page1,
  },
  {
    path: '/page2',
    name: page2.name,
    component: page2,
  },
  {
    path: '/page3',
    name: page3.name,
    component: page3,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
