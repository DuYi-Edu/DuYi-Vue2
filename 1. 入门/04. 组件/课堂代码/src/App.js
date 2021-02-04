import MyButton from "./components/MyButton.js";
// vue的根组件
const template = `
<div>
  <h1>App组件</h1>
  <MyButton />
</div>
`;

export default {
  components: {
    MyButton,
  },
  template,
};
