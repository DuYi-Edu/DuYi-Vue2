<template>
  <h1>B</h1>
</template>

<script>
export default {
  inject: ["a", "b"],
  created() {
    console.log(this.a, this.b);
  },
};
</script>

<style></style>
