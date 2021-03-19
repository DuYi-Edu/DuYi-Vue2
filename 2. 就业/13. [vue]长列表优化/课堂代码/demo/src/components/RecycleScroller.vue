<template>
  <div class="recycle-scroller-container" @scroll="setPool" ref="container">
    <div class="recycle-scroller-wrapper" :style="{ height: `${totalSize}px` }">
      <div
        class="recycle-scroller-item"
        v-for="poolItem in pool"
        :key="poolItem.item[keyField]"
        :style="{
          transform: `translateY(${poolItem.position}px)`,
        }"
      >
        <slot :item="poolItem.item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
var prev = 10,
  next = 10;
export default {
  props: {
    // 数据的数组
    items: {
      type: Array,
      default: () => [],
    },
    // 每条数据的高度
    itemSize: {
      type: Number,
      default: 0,
    },
    keyField: {
      // 给我的items数组中，每个对象哪个属性代表唯一且稳定的编号
      type: String,
      default: 'id',
    },
  },
  data() {
    return {
      // { item: 原始数据, position: 该数据对应的偏移位置 }
      pool: [], // 渲染池，保存当前需要渲染的数据
    };
  },
  mounted() {
    this.setPool();
    window.vm = this;
  },
  computed: {
    totalSize() {
      return this.items.length * this.itemSize; // 总高度
    },
  },
  methods: {
    setPool() {
      const scrollTop = this.$refs.container.scrollTop;
      const height = this.$refs.container.clientHeight;
      let startIndex = Math.floor(scrollTop / this.itemSize);
      let endIndex = Math.ceil((scrollTop + height) / this.itemSize);
      startIndex -= prev;
      if (startIndex < 0) {
        startIndex = 0;
      }
      endIndex += next;
      const startPos = startIndex * this.itemSize;
      this.pool = this.items.slice(startIndex, endIndex).map((it, i) => ({
        item: it,
        position: startPos + i * this.itemSize,
      }));
    },
  },
};
</script>

<style>
.recycle-scroller-container {
  overflow: auto;
}
.recycle-scroller-wrapper {
  position: relative;
}
.recycle-scroller-item {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
</style>
