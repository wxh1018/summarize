<template>
  <el-upload
    class="upload-demo"
    show-file-list
    :action="action"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :on-exceed="handleExceed"
    :file-list="fileList"
    :on-error="error"
    :on-success="on_success"
  >
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>
<script>
  // <wxh-base-upload :action="uploadurl" :imgs.sync="formLabelAlign.sceneImg" />
export default {
  name: "wxh-upload",
  props: {
    action: {
      type: String,
      required: true,
    },
    imgs: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      fileList: [],
      file: [],
      filenow: {},
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      if (!this.imgs) return;
      let arr = this.imgs.split(",");
      const arr2 = function (arr) {
        let arr1 = [];
        for (let i = 0; i < arr.length; i++) {
          let name = "";
          let response = "";
          if (i % 2 == 0) {
            name = arr[i];
            response = arr[i + 1];
            arr1.push({ name, response });
          }
        }
        return arr1;
      };
      this.fileList = arr2(arr);
      this.file = arr2(arr);
    },
    fnimg(arr) {
      let str = arr.map((v) => {
        return `${v.name},${v.response}`;
      });
      return str.join(",");
    },
    handleRemove(file, fileList) {
      let name = file.name;
      this.file = this.file.filter((v) => v.name != name);
      this.filter();
    },
    //点击文件展示
    handlePreview(file) {
      this.filenow = file;
      let a = document.createElement("a");
      let body = document.querySelector("body");
      body.appendChild(a);
      a.href = "http://" + file.response;
      a.target = "_blank";
      a.click();
    },
    handleExceed(files, fileList) {
      // this.$message.warning(
      //   `当前限制选择 3 个文件，本次选择了 ${
      //     files.length
      //   } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      // );
    },
    error(err, file, fileList) {
      this.base.warn(this, "上传失败");
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    on_success(response, file, fileList) {
      this.file = fileList;
      this.filter();
    },
    //提交时的数据格式
    filter() {
      let sceneImg = this.fnimg(this.file);
      this.$emit("update:imgs", sceneImg);
    },
  },
};
</script>
<style scoped lang='less'>
</style>