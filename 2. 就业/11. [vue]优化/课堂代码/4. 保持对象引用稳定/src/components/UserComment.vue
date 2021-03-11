<template>
  <p>
    <span style="color:red" v-if="rerender">rerender:{{ rerender }}</span>
    {{ comment.username }}:
    {{ comment.content }}
  </p>
</template>

<script>
export default {
  props: {
    comment: Object,
  },
  data() {
    return {
      rerender: 0,
    };
  },
  beforeUpdate() {
    this.rerender++;
  },
};
</script>

<style></style>
