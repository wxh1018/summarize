<template>
  <div>
    <wxh-form ref="fo" v-model="form" :form1="form1"></wxh-form>
    <el-button @click="submit">submit</el-button>
    <div id="code"></div>
  </div>
</template>
<script>
import { GVerify } from "./code";
export default {
  data() {
    return {
      form1: [
        {
          key: "name",
          value: "",
          type: "input",
          label: "姓名",
          watch: (e) => this.watchname(e),
        },
        {
          key: "search",
          value: "",
          type: "select",
          label: "请选择",
          options: [
            { value: 1, label: "我是1" },
            { value: 2, label: "我是2" },
          ],
        },
        {
          key: "sex",
          type: "radio",
          options: [
            { label: "1", text: "男" },
            { label: "2", text: "女" },
          ],
        },
      ],
      form: { name: "wangxuehao", sex: "1" },
      verifyCode: null,
    };
  },
  watch: {},
  mounted() {
    this.verifyCode = new GVerify("code");
    // console.log(this.verifyCode);
    // console.log(this.verifyCode.validate(this.verifyCode.options.code));
  },
  methods: {
    submit() {
      console.log(this.form);
    },
  },
};
</script>
<style scoped lang='less'>
#code {
  width: 70px;
  height: 30px;
  border: 1px solid red;
}
</style>