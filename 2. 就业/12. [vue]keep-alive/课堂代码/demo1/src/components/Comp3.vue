<template>
  <div>
    <h1>Comp3</h1>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'Comp3',
  created() {
    console.log('comp3 created');
  },
  mounted() {
    console.log('comp3 mounted');
  },
  destroyed() {
    console.log('comp3 destroyed');
  },
};
</script>

<style></style>
