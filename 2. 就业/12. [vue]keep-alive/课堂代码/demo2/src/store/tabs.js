export default {
  namespaced: true,
  state: {
    pageNames: [], // 选项卡的页面
  },
  mutations: {
    addPage(state, newPageName) {
      if (!state.pageNames.includes(newPageName)) {
        state.pageNames.push(newPageName);
      }
    },
    removePage(state, pageName) {
      const index = state.pageNames.indexOf(pageName);
      if (index >= 0) {
        state.pageNames.splice(index, 1);
      }
    },
  },
};
