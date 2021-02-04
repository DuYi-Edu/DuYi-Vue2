import Vuex from "vuex";
import Vue from "vue";
import loginUser from "./loginUser";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    loginUser,
  },
});

window.store = store;

export default store;
