<template>
  <div id="app">
    <input v-model.number="money" type="number" />
    <p>
      {{ money | formatMoney(" ") }}
    </p>
  </div>
</template>

<script>
import { formatMoney } from "./filter/moneyFilter";
export default {
  data() {
    return {
      money: 1000,
    };
  },
  filters: {
    formatMoney,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
