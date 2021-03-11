<template>
  <div id="app">
    <div class="container">
      <button @click="handleAdd1">添加：点击后重新获取数据</button>
      <user-comment
        v-for="item in comments1"
        :key="item.id"
        :comment="item"
      ></user-comment>
    </div>
    <div class="container">
      <button @click="handleAdd2">添加：点击后向当前数据插入数据</button>
      <user-comment
        v-for="item in comments2"
        :key="item.id"
        :comment="item"
      ></user-comment>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserComment from "./components/UserComment.vue";

// api
async function getComments() {
  return await axios.get("/api/comment").then((resp) => resp.data);
}

async function addComment() {
  return await axios.post("/api/comment").then((resp) => resp.data);
}

export default {
  components: { UserComment },
  data() {
    return {
      comments1: [],
      comments2: [],
    };
  },
  async created() {
    this.comments1 = await getComments();
    this.comments2 = await getComments();
  },
  methods: {
    async handleAdd1() {
      await addComment();
      this.comments1 = await getComments();
    },
    async handleAdd2() {
      const cmt = await addComment();
      this.comments2.unshift(cmt);
    },
  },
};
</script>

<style>
#app {
  width: 800px;
  margin: 0 auto;
  display: flex;
}
.container {
  margin: 1em;
  flex: 1 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
