<template>
  <div>
    <h1>
      App {{ number.value }}
      <button @click="number.value++">+</button>
    </h1>

    <A />
  </div>
</template>

<script>
import store from "./store";
import A from "./components/A";
export default {
  provide: {
    a: 1,
    b: 2,
  },
  components: {
    A,
  },
  data() {
    return {
      number: store.number,
    };
  },
};
</script>
