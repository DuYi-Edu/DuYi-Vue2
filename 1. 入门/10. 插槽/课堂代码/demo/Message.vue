<template>
  <div class="message-container">
    <div class="content">
      <!-- 内置组件，插槽，占位 -->
      <slot></slot>
    </div>
    <button>确定</button>
    <button>关闭</button>
  </div>
</template>

<script>
export default {
  props: ["msg"],
};
</script>

<style>
.message-container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid;
  padding: 20px;
}
</style>
