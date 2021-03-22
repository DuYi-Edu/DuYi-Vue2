<template>
  <div>
    <h1>Hello Vue</h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
var config = {
  created() {
    console.log('config created');
  },
};
export default {
  mixins: [config],
  created() {
    console.log('app created');
    console.log(this);
  },
  data() {
    return {
      title: 'asdfasfd',
    };
  },
};
</script>
