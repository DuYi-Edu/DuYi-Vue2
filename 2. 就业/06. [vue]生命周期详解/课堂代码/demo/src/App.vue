<template>
  <div id="app">
    <h1>App</h1>
    <A v-if="show" :count="count" />
    <button @click="count++">increase</button>
    <button @click="show = !show">toggle</button>
  </div>
</template>

<script>
import A from "./A.vue";

export default {
  components: { A },
  data() {
    return {
      show: true,
      count: 0,
    };
  },
  beforeCreate() {
    console.log("App beforeCreate");
  },
  created() {
    console.log("App created");
  },
  beforeMount() {
    console.log("App beforeMount");
  },
  mounted() {
    console.log("App mounted");
  },
  beforeUpdate() {
    console.log("App beforeUpdate");
  },
  updated() {
    console.log("App updated");
  },
  beforeDestroy() {
    console.log("App beforeDestroy");
  },
  destroyed() {
    console.log("App destroyed");
  },
};
</script>
