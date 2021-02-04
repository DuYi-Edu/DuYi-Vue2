import * as userApi from "../api/user";

export default {
  namespaced: true,
  strict: true,
  state: {
    loading: false,
    data: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  getters: {
    status(state) {
      if (state.loading) {
        return "loading";
      } else if (state.data) {
        return "login";
      } else {
        return "unlogin";
      }
    },
  },
  actions: {
    async whoAmI(ctx) {
      ctx.commit("setLoading", true);
      const resp = await userApi.whoAmI();
      ctx.commit("setLoading", false);
      ctx.commit("setData", resp);
    },
    async login(ctx, payload) {
      ctx.commit("setLoading", true);
      const resp = await userApi.login(payload.loginId, payload.loginPwd);
      ctx.commit("setLoading", false);
      ctx.commit("setData", resp);
      return resp;
    },
    async loginOut(ctx) {
      ctx.commit("setLoading", true);
      await userApi.loginOut();
      ctx.commit("setLoading", false);
      ctx.commit("setData", null);
    },
  },
};
