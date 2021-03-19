<template>
  <div id="app">
    <RecycleScroller
      :items="items"
      :itemSize="54"
      class="scroller"
      v-slot="{ item }"
    >
      <ListItem :item="item" />
    </RecycleScroller>
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue';
// import RecycleScroller from './components/RecycleScroller';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
var items = [];
for (var i = 0; i < 10000; i++) {
  items.push({
    id: i + 1,
    count: i + 1,
  });
}
export default {
  components: { ListItem, RecycleScroller },
  data() {
    return {
      items,
    };
  },
};
</script>

<style>
#app {
  width: 100%;
  margin: 0 auto;
}
.scroller {
  width: 500px;
  margin: 0 auto;
  height: 500px;
}
</style>
