<template>
  <div class="container">
    <div class="block" v-for="n in 21" v-if="defer(n)">
      <heavy-comp></heavy-comp>
    </div>
  </div>
</template>

<script>
import HeavyComp from "./components/HeavyComp.vue";
import defer from "./mixin/defer";
export default {
  mixins: [defer(21)],
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
