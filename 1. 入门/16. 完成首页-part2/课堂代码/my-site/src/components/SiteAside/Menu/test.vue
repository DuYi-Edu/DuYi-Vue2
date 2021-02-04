<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
  components: {
    Menu,
  },
};
</script>

<style>
.test-container {
  width: 400px;
  height: 600px;
  border: 2px solid red;
  background: #000;
  margin: 0 auto;
}
</style>
