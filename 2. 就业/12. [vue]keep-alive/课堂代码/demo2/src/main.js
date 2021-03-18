import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'tailwindcss/tailwind.css';

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
