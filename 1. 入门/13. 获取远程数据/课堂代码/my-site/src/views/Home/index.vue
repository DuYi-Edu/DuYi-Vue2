<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // this.$sayHello();
      this.$showMessage({
        content: "评论成功",
        type: "success",
        container: this.$refs.container,
        callback: function() {
          console.log("完成！！！");
        },
      });
    },
  },
};
</script>

<style scoped>
.home-container {
  background: lightblue;
  width: 300px;
  height: 500px;
  border: 1px solid;
  margin: 50px auto;
}
</style>
