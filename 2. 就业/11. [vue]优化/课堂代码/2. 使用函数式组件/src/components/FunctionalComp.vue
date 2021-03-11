<template functional>
  <h1>NormalComp: {{ props.count }}</h1>
</template>

<script>
export default {
  functional: true,
  props: {
    count: Number,
  },
};
</script>

<style></style>
