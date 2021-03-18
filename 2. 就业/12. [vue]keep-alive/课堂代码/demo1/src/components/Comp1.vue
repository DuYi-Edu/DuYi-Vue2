<template>
  <div>
    <h1>Comp1</h1>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'Comp1',
  created() {
    console.log('comp1 created');
  },
  mounted() {
    console.log('comp1 mounted');
  },
  destroyed() {
    console.log('comp1 destroyed');
  },
  activated() {
    console.log('comp1 activated');
  },
  deactivated() {
    console.log('comp1 deactivated');
  },
};
</script>

<style></style>
