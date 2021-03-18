<template>
  <div id="app">
    <p>
      <button @click="curIndex = (curIndex + 1) % comps.length">
        switch
      </button>
    </p>
    <keep-alive>
      <component :is="comps[curIndex]"></component>
    </keep-alive>
  </div>
</template>

<script>
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
export default {
  data() {
    return {
      comps: Object.freeze([Comp1, Comp2, Comp3]),
      curIndex: 0,
    };
  },
};
</script>

<style>
#app {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
</style>
