<template>
  <div class="container">
    <Clock v-if="showClock" />
    <button @click="showClock = !showClock">切换显示</button>
  </div>
</template>

<script>
import Clock from "./Clock";
export default {
  components: {
    Clock,
  },
  data() {
    return {
      showClock: true,
    };
  },
};
</script>

<style></style>
