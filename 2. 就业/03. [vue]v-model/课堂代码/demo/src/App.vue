<template>
  <div class="container">
    <form class="left">
      <div class="form-item">
        <label>账号</label>
        <input type="text" v-model.trim="formData.loginId" />
      </div>
      <div class="form-item">
        <label>密码</label>
        <input
          type="password"
          v-model="formData.loginPwd"
          autocomplete="new-password"
        />
      </div>
      <div class="form-item">
        <label>爱好</label>
        <label>
          <input type="checkbox" value="sports" v-model="formData.loves" />
          运动
        </label>
        <label>
          <input type="checkbox" value="movie" v-model="formData.loves" />
          电影
        </label>
        <label>
          <input type="checkbox" value="music" v-model="formData.loves" />
          音乐
        </label>
        <label>
          <input type="checkbox" value="other" v-model="formData.loves" />
          其他
        </label>
      </div>
      <div class="form-item">
        性别：
        <label>
          <input type="radio" v-model="formData.sex" value="male" />
          男
        </label>
        <label>
          <input type="radio" v-model="formData.sex" value="female" />
          女
        </label>
      </div>
      <div class="form-item">
        <label>年龄</label>
        <!-- <input type="number" v-model.number="formData.age" /> -->
        <!-- <Number :value="formData.age" @input="formData.age = $event" /> -->
        <Number v-model="formData.age" />
      </div>
      <div class="form-item">
        <label>个人简介</label>
        <textarea v-model.lazy="formData.introduce"></textarea>
      </div>
      <div class="form-item">
        <label>职位</label>
        <select v-model="formData.job">
          <option value="-1">请选择</option>
          <option value="1">前端开发</option>
          <option value="2">后端开发</option>
          <option value="3">全栈开发</option>
          <option value="4">项目经理</option>
        </select>
      </div>
      <div class="form-item">
        <label>
          <input type="checkbox" v-model="formData.remember" />
          记住我的选择
        </label>
      </div>
    </form>
    <div class="right">
      <pre
        >{{ formData }}
      </pre>
    </div>
  </div>
</template>

<script>
import Number from "./Number";
export default {
  components: {
    Number,
  },
  data() {
    return {
      formData: {
        loginId: "abc",
        loginPwd: "",
        loves: ["sports", "movie", "music", "other"],
        sex: "male",
        age: 18,
        introduce: "我是一只小鸭子呀咿呀咿呀哟\n嘎嘎",
        job: "1",
        remember: false,
      },
    };
  },
  mounted() {
    console.log(this._vnode);
  },
};
</script>

<style lang="less">
.container {
  width: 1000px;
  height: 600px;
  border: 1px solid #ccc;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left,
.right {
  width: 50%;
  box-sizing: border-box;
  padding: 25px;
}
.right {
  border-left: 1px solid #ccc;
  font-size: 16px;
}
.form-item {
  margin-bottom: 15px;

  label {
    margin-right: 5px;
  }

  textarea {
    display: block;
    margin-top: 10px;
    resize: none;
    width: 100%;
    height: 100px;
  }
}
</style>
