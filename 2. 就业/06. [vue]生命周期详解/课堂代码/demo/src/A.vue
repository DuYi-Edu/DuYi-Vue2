<template>
  <div>
    <h1>A compnent: {{ count }}</h1>
    <B :count="count" />
  </div>
</template>

<script>
import B from "./B.vue";
export default {
  components: { B },
  props: ["count"],
  beforeCreate() {
    console.log("A beforeCreate");
  },
  created() {
    console.log("A created");
  },
  beforeMount() {
    console.log("A beforeMount");
  },
  mounted() {
    console.log("A mounted");
  },
  beforeUpdate() {
    console.log("A beforeUpdate");
  },
  updated() {
    console.log("A updated");
  },
  beforeDestroy() {
    console.log("A beforeDestroy");
  },
  destroyed() {
    console.log("A destroyed");
  },
};
</script>

<style></style>
