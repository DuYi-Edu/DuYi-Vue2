<template>
  <div class="item-container">
    <div class="item" v-for="n in 5000"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  width: 5px;
  height: 3px;
  background: #ccc;
  margin: 0.1em;
}
</style>
