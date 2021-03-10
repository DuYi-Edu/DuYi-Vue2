<template>
  <div id="app">
    <button @click="addNumber">add number</button>
    <button @click="delNumber">delete number</button>
    <button @click="shuffle">shuffle</button>
    <transition-group name="nums" tag="ul">
      <li v-for="item in nums" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6],
      next: 7,
    };
  },
  methods: {
    getRandomIndex() {
      return Math.floor(Math.random() * this.nums.length);
    },
    addNumber() {
      var index = this.getRandomIndex();
      this.nums.splice(index, 0, this.next);
      this.next++;
    },
    delNumber() {
      var index = this.getRandomIndex();
      this.nums.splice(index, 1);
    },
    shuffle() {
      this.nums.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style>
#app {
  width: 500px;
  margin: 0 auto;
}
.nums-enter,
.nums-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.nums-enter-active,
.nums-leave-active,
.nums-move {
  transition: 0.5s;
}

.nums-leave-active {
  position: absolute;
}
</style>
