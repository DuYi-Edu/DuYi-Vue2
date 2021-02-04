<template>
  <Layout>
    中间主区域
    <template #header>页头</template>
    <template v-slot:footer>页脚</template>
  </Layout>
</template>

<script>
import Layout from "./Layout";
export default {
  components: {
    Layout,
  },
};
</script>

<style></style>
