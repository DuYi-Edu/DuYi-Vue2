// 数据仓库模块
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex); // 应用vuex插件

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const store = new Vuex.Store({
  // 仓库配置对象
  state: {
    count: 0, // 默认值为0
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
    // payload：负荷  负载
    power(state, payload) {
      state.count **= payload;
    },
  },
  actions: {
    async asyncIncrease(ctx) {
      await delay(1000);
      ctx.commit("increase");
    },
    async asyncDecrease(ctx) {
      await delay(1000);
      ctx.commit("decrease");
    },
    async asyncPower(ctx, payload) {
      await delay(1000);
      ctx.commit("power", payload);
    },
  },
});

window.store = store;

export default store;
