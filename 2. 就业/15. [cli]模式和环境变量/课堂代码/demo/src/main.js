import Vue from 'vue';
import App from './App.vue';
import { getNews } from './api/news';
Vue.config.productionTip = false;
getNews();
new Vue({
  render: (h) => h(App),
}).$mount('#app');
