<template>
  <LoadingButton @click="handleClick" />
</template>

<script>
import LoadingButton from "./LoadingButton";
export default {
  components: {
    LoadingButton,
  },
  methods: {
    async handleClick(count) {
      console.log("父组件", count);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("有一个未知错误");
        }, 3000);
      });
    },
  },
};
</script>

<style>
body {
  text-align: center;
}
</style>
