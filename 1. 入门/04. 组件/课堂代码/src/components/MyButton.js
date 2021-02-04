const template = `<button @click="count++">当前点击了{{count}}次</button>`;

export default {
  data() {
    return {
      count: 0,
    };
  },
  template,
};
