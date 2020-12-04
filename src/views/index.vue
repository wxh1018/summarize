<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="4" v-for="(item, id) in list" :key="id">
        <div class="box" @click="jump(item.comid)" :style="randomcolor()">
          {{ item.name }}
        </div>
      </el-col>
    </el-row>
    <component :is="componentId"></component>
    <button @click="tojs">长三角</button>
  </div>
</template>
<script>
import coms from "./index.js";
export default {
  data() {
    return {
      items: [1, 2, 3],
      list: [
        { name: "map", comid: "map2" },
        { name: "menu", comid: "Left" },
        { name: "echarts", comid: "" },
        { name: "upload", comid: "upoload" },
        { name: "step", comid: "step" },
        { name: "tab", comid: "tab" },
        { name: "form", comid: "wxhform" },
      ],
      colors: [
        "#55efc4",
        "#81ecec",
        "#74b9ff",
        "#a29bfe",
        "#dfe6e9",
        "#00cec9",
        "#0984e3",
        "#6c5ce7",
        "#b2bec3",
        "#ffeaa7",
        "#fab1a0",
        "#ff7675",
        "#fd79a8",
        "#636e72",
        "#fdcb6e",
        "#e17055",
        "#d63031",
        "#e84393",
        "#2d3436",
      ],
      componentId: "",
    };
  },
  components: {
    ...coms,
  },
  computed: {},
  watch: {},
  created() {
    String.prototype.toArray = function () {
      let arr = [];
      for (let i = 0; i < this.length; i++) {
        arr.push(this[i]);
      }
      return arr;
    };
  },
  mounted() {
    let tolow = (str) => str.toLocaleLowerCase();
    let replace = (str) => str.replace(/a/g, "");
    this.base.pipeline(tolow, replace)("NAME");
  },
  methods: {
    jump: _.debounce(function (id) {
      console.log(1);
      if (id != "") {
        this.componentId = id;
      }
    }, 100),
    randomcolor() {
      let deg = "-90";
      let start = "white";
      let end = "red";
      start = this.getcolor();
      end = this.getcolor();
      let sty = `background: ${start}`;
      // let sty = `background: linear-gradient(${deg}deg,${start}, ${end});`;
      return sty;
    },
    getcolor() {
      let colors = "123123123abcdfabcefabcdef".toArray();
      let co = "";
      // for (let i = 0; i < 6; i++) {
      //   let a = Math.ceil(Math.random() * colors.length);
      //   co += colors[a];
      // }
      // return "#" + co;
      let num = Math.floor(Math.random() * this.colors.length);
      co = this.colors[num];
      return co;
    },
    tabevent(v) {},
    tojs() {
      this.$router.push("/search_area_data");
    },
  },
};
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
}

.box {
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  cursor: pointer;
}
.el-col {
  margin-bottom: 20px;
}
@media screen and (max-width: 1000px) {
  .box {
    font-size: 20px;
  }
}
</style>
