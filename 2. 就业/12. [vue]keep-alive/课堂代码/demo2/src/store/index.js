import Vue from 'vue';
import Vuex from 'vuex';
import tabs from './tabs';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tabs,
  },
});
