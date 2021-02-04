<template>
  <div class="layout-container">
    <header style="background: #f40">
      <!-- 我们希望把页头放这里，提供插槽，名为header -->
      <slot name="header"></slot>
    </header>
    <main style="background: lightblue">
      <!-- 我们希望把主要内容放这里，提供插槽，名为default -->
      <slot></slot>
    </main>
    <footer style="background: yellow">
      <!-- 我们希望把页脚放这里，提供插槽，名为footer -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
