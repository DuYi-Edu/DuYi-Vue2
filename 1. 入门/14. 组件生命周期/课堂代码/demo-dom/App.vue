<template>
  <div ref="container">
    容器宽度：{{ containerWidth }} 容器高度：{{ containerHeight }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerWidth: 0,
      containerHeight: 0,
    };
  },
  mounted() {
    this.containerWidth = this.$refs.container.clientWidth;
    this.containerHeight = this.$refs.container.clientHeight;
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style></style>
