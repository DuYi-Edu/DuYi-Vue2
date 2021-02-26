<template>
  <div class="number-container">
    <button type="button" @click="handleClick(number - 1)">-</button>
    <span>{{ number }}</span>
    <button type="button" @click="handleClick(number + 1)">+</button>
  </div>
</template>

<script>
export default {
  model: {
    prop: "number",
    event: "change",
  },
  props: ["number"],
  methods: {
    handleClick(newValue) {
      // this.value = newValue; // 属性不可更改
      this.$emit("change", newValue);
    },
  },
};
</script>

<style>
.number-container {
  display: inline-block;
}
.number-container span {
  margin: 0 5px;
}
</style>
