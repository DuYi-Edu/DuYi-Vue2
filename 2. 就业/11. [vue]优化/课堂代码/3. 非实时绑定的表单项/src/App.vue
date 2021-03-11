<template>
  <div class="app-container">
    <use-v-model></use-v-model>
    <no-v-model></no-v-model>
  </div>
</template>

<script>
import UseVModel from "./components/UseVModel.vue";
import NoVModel from "./components/NoVModel";
export default {
  components: { UseVModel, NoVModel },
};
</script>

<style scoped>
.app-container {
  width: 800px;
  display: flex;
  margin: 0 auto;
}
.container {
  margin: 1em;
  flex: 1 0 auto;
}
</style>
