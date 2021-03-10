<template>
  <div id="app">
    <button @click="titleLevel--">level-</button>
    <button @click="titleLevel++">level+</button>
    <transition name="title" appear>
      <component :is="`h${titleLevel}`">title level {{ titleLevel }}</component>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleLevel: 1,
    };
  },
};
</script>

<style>
#app {
  text-align: center;
}
.title-enter,
.title-leave-to {
  opacity: 0;
}
.title-enter-active,
.title-leave-active {
  transition: 3s;
}
</style>
