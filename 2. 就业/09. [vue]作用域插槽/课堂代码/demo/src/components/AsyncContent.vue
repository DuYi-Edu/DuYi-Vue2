<template>
  <div>
    <slot name="loading" v-if="isLoading">默认加载中的效果...</slot>
    <slot name="error" v-else-if="error" :error="error">{{ error }}</slot>
    <!-- 通过 v-bind 将子组件的插槽数据绑定到了父组件插槽的位置 -->
    <slot name="default" v-else :content="content">{{ content }}</slot>
  </div>
</template>

<script>
export default {
  props: {
    contentPromise: Promise,
  },
  data() {
    return {
      isLoading: true,
      content: null,
      error: null,
    };
  },
  async created() {
    try {
      this.content = await this.contentPromise;
      this.error = null;
    } catch (err) {
      this.content = null;
      this.error = err;
    } finally {
      this.isLoading = false;
    }
  },
  mounted() {
    console.log("$slots", this.$slots);
    console.log("$scopedSlots", this.$scopedSlots);
  },
};
</script>
