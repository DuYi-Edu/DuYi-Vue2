<template>
  <div>
    <button @click="handleClick" :disabled="isLoading">
      {{ isLoading ? "loading" : "submit" }}
    </button>
    <div class="err">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0, // 点击的次数
      isLoading: false,
      error: "",
    };
  },
  methods: {
    handleClick() {
      /*
       * 点击次数 +1
       * 错误消息清空
       * 为了防止重复点击，需要先将 isLoading 设置为 true
       * 通知父组件：「我被点击了」，并传递当前的点击次数
       * 等待父组件处理（有可能是异步的），将父组件处理的结果设置到 error
       */
      this.count++;
      this.error = "";
      this.isLoading = true;
      this.$emit("click", this.count, (err) => {
        // 该函数传给父组件，让父组件决定什么时候执行
        this.isLoading = false;
        this.error = err;
      });
    },
  },
};
</script>

<style>
.err {
  color: #f40;
  font-size: 12px;
}
</style>
