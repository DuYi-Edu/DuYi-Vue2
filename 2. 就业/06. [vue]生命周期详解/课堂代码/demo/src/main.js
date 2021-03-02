import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    console.log("vue实例 beforeCreate");
  },
  created() {
    console.log("vue实例 created");
  },
  beforeMount() {
    console.log("vue实例 beforeMount");
  },
  mounted() {
    console.log("vue实例 mounted", this);
  },
  beforeUpdate() {
    console.log("vue实例 beforeUpdate");
  },
  updated() {
    console.log("vue实例 updated");
  },
  beforeDestroy() {
    console.log("vue实例 beforeDestroy");
  },
  destroyed() {
    console.log("vue实例 destroyed");
  },
}).$mount("#app");
