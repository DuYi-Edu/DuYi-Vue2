<template>
  <div>
    <p>
      <button @click="$emit(`update:num1`, num1 - 1)">-</button>
      {{ num1 }}
      <button @click="$emit(`update:num1`, num1 + 1)">+</button>
    </p>
    <p>
      <button @click="$emit(`update:num2`, num2 - 1)">-</button>
      {{ num2 }}
      <button @click="$emit(`update:num2`, num2 + 1)">+</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["num1", "num2"],
  mounted() {
    console.log(this.$parent);
  },
};
</script>
