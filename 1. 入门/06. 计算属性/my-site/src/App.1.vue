<template>
  <div>
    <h1>App组件</h1>
    <h2>{{ count }}</h2>
    <p>姓：{{ firstName }}</p>
    <p>名：{{ lastName }}</p>
    <p>全名：{{ fullName }}</p>
    <p>全名：{{ fullName }}</p>
    <p>全名：{{ fullName }}</p>
    <p>全名：{{ fullName }}</p>
    <p>全名：{{ fullName }}</p>
    <button @click="fullName = '姬成'">修改姓名为姬成</button>
    <button @click="count++">count++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "袁",
      lastName: "进",
      count: 0,
    };
  },
  computed: {
    fullName: {
      get() {
        console.log("fullname called");
        return this.firstName + " " + this.lastName + Date.now();
      },
      set(val) {
        console.log("正在设置全名", val);
        this.firstName = val[0];
        this.lastName = val.substr(1);
      },
    },
  },
  methods: {
    getFullName() {
      console.log("method called");
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
