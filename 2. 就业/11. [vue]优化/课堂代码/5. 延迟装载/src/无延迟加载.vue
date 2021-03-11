<template>
  <div class="container">
    <div class="block" v-for="n in 21">
      <heavy-comp></heavy-comp>
    </div>
  </div>
</template>

<script>
import HeavyComp from "./components/HeavyComp.vue";
export default {
  components: { HeavyComp },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
.block {
  border: 3px solid #f40;
}
</style>
