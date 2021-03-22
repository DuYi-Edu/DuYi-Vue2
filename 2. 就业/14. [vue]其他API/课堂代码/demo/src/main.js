import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.optionMergeStrategies.created = function(parent, child) {
  if (!parent) {
    return child;
  }
  if (!child) {
    return parent;
  }
  return [child];
};

new Vue({
  render: (h) => h(App),
}).$mount('#app');
