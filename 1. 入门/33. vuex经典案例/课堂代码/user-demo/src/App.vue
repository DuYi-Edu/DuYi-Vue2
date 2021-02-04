<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/news">News</router-link>
      |
      <user-name />
    </div>
    <router-view />
  </div>
</template>

<script>
import UserName from "./component/UserName";
export default {
  components: {
    UserName,
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .ml-5 {
  margin-left: 5px;
}
</style>
