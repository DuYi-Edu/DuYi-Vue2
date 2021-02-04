<template>
  <h1>ChildComp, a:{{ a }}, b:{{ b }}</h1>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
  methods: {
    m1() {
      console.log("method");
    },
  },
};
</script>

<style></style>
