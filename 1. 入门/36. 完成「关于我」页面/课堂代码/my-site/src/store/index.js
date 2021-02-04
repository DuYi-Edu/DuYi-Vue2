import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    banner,
    setting,
    about,
  },
  strict: true,
});
