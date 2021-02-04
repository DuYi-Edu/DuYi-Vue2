<template>
  <div class="block">
    <p>the number is</p>
    <h1>{{ $store.state.count }}</h1>
    <p>
      <button @click="handleDecrease">减少</button>
      <button @click="handleAsyncIncrease">异步增加</button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    handleDecrease() {
      this.$store.commit("decrease");
    },
    handleAsyncIncrease() {
      this.$store.dispatch("asyncIncrease");
    },
  },
};
</script>
