<template>
  <div id="app">
    <button @click="normalCount = 10000">生成10000个普通组件</button>
    <button @click="functionalCount = 10000">生成10000个函数组件</button>

    <div class="container">
      <div class="item">
        <NormalComp v-for="n in normalCount" :key="n" :count="n"></NormalComp>
      </div>
      <div class="item">
        <FunctionalComp
          v-for="n in functionalCount"
          :key="n"
          :count="n"
        ></FunctionalComp>
      </div>
    </div>
  </div>
</template>

<script>
import NormalComp from "./components/NormalComp";
import FunctionalComp from "./components/FunctionalComp";
export default {
  components: {
    NormalComp,
    FunctionalComp,
  },
  data() {
    return {
      functionalCount: 0,
      normalCount: 0,
    };
  },
  mounted() {
    window.vm = this;
  },
};
</script>

<style>
#app {
  text-align: center;
}
.container {
  width: 90%;
  display: flex;
  margin: 0 auto;
}
.item {
  padding: 30px;
  border: 1px solid #ccc;
  margin: 1em;
  flex: 1 1 auto;
}
</style>
