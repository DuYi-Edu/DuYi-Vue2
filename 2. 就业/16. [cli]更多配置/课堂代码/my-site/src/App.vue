<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
    <!-- <AsyncComponent /> -->
  </div>
</template>

<script>
// const AsyncComponent = () => {
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       const MyComp = await import("./MyComp");
//       resolve(MyComp);
//     }, 3000);
//   });
// };

import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
    // AsyncComponent,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
