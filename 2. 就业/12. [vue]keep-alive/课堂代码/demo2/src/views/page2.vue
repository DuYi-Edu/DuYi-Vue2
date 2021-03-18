<template>
  <div class="mx-auto text-center p-5">
    <h1 class="font-bold text-3xl text-red-400">Page 2</h1>
    <input type="text" class="rounded-md border-2 mt-5 p-3 w-1/2" />
    <div class="mt-5">
      <button class="focus:outline-none" @click="count--">-</button>
      <span class="mx-5 font-bold text-2xl align-middle">{{ count }}</span>
      <button class="focus:outline-none" @click="count++">+</button>
    </div>
  </div>
</template>

<script>
//该页面难以改动
export default {
  name: 'page2',
  data() {
    return {
      count: 0,
    };
  },
};
</script>
