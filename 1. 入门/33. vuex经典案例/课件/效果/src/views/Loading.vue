<template>
  <h1>正在登录中...</h1>
</template>

<script>
import store from "../store";
export default {
  created() {
    this.unWatch = store.watch(
      (state, getters) => getters["loginUser/status"],
      (status) => {
        if (status !== "loading") {
          this.$router.push(this.$route.query.returnurl ?? "/home");
        }
      },
      {
        immediate: true,
      }
    );
  },
  destroyed() {
    this.unWatch();
  },
};
</script>

<style></style>
