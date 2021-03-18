<template>
  <div>
    <h1>Comp2</h1>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'Comp2',
  created() {
    console.log('comp2 created');
  },
  mounted() {
    console.log('comp2 mounted');
  },
  destroyed() {
    console.log('comp2 destroyed');
  },
};
</script>

<style></style>
