<template>
  <div class="h-full w-full fixed overflow-hidden flex">
    <div
      class="h-full flex-none w-72 bg-gray-800 text-gray-50 p-3 flex flex-col"
    >
      <h1 class="font-bold text-center text-3xl">Web Site</h1>
      <ul class="mt-10 px-10 text-center">
        <li v-for="item in $router.options.routes" class="mb-10">
          <router-link active-class="text-red-400" :to="{ name: item.name }">
            {{ item.name }}
          </router-link>
          <button
            @click="handleAddPage(item.name)"
            class="ml-5 text-gray-500 focus:outline-none"
          >
            +
          </button>
        </li>
      </ul>
    </div>
    <div class="h-full flex-auto bg-gray-50">
      <div class="flex items-center p-5 border-b text-gray-500">
        <span class="mr-5">选项卡：</span>
        <ul class="flex">
          <li
            v-for="pageName in $store.state.tabs.pageNames"
            class="mr-5 bg-blue-100 px-3 py-2 rounded-md"
          >
            <router-link
              active-class="text-yellow-600"
              :to="{ name: pageName }"
            >
              {{ pageName }}
            </router-link>
            <button
              class="ml-3 text-red-400 focus:outline-none"
              @click="handleRemovePage(pageName)"
            >
              -
            </button>
          </li>
        </ul>
      </div>
      <keep-alive :include="$store.state.tabs.pageNames">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this);
  },
  methods: {
    handleAddPage(pageName) {
      this.$store.commit('tabs/addPage', pageName);
    },
    handleRemovePage(pageName) {
      this.$store.commit('tabs/removePage', pageName);
    },
  },
};
</script>
