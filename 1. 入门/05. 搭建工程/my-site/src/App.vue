<template>
  <div>
    <h1>App组件</h1>
    <Avatar
      url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"
      :size="150"
    />
    <Avatar
      url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg"
      :size="50"
    />
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Avatar,
  },
};
</script>
