<template>
  <div ref="container">
    <ul></ul>
    <h1 ref="title">{{ count }}</h1>
    <button @click="count++">count +1</button>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";

export default {
  data() {
    return {
      banners: [],
      count: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.banners);
  },
  created() {
    console.log("created", this.banners);
  },
  beforeMount() {
    console.log("beforeMount", this.$refs.container);
  },
  mounted() {
    console.log("mounted", this.$refs.container);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$refs.title.innerText, this.count);
  },
  updated() {
    console.log("updated", this.$refs.title.innerText, this.count);
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
