<template>
  <div>
    <h1>
      A {{ number.value }}
      <button @click="number.value--">-</button>
    </h1>
    <B />
  </div>
</template>

<script>
import B from "./B";
import store from "../store";
export default {
  components: {
    B,
  },
  data() {
    return {
      number: store.number,
    };
  },
};
</script>

<style></style>
