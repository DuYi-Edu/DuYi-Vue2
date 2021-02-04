<template>
  <div class="user-name">
    <span v-if="status === 'loading'">loading...</span>

    <template v-else-if="status === 'login'">
      <router-link to="/user">{{ user.name }}</router-link>
      <a href="" @click.prevent="handleLoginOut">退出</a>
    </template>

    <router-link v-else to="/login" exact-path>Login</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("loginUser", ["status"]),
    ...mapState("loginUser", ["user"]),
  },
  methods: {
    async handleLoginOut() {
      await this.$store.dispatch("loginUser/loginOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.user-name {
  display: inline-block;
}
.user-name a,
.user-name span {
  margin-right: 15px;
}
</style>
