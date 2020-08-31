<template>
  <button
    @click="cl1"
    @mousedown="mos_down"
    @mouseup="up"
    :class="{'ani':ani,'ani_hover':ani_hover,small:small,same:same} "
    ref="btn"
  >
    <slot>暂� 内容</slot>
  </button>
</template>
<script>
export default {
  name: "wxh-btn",
  props: ["type"],
  data() {
    return {
      ani: true,
      ani_hover: false,
      small: false,
      same: false
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let type = this.type;
      if (type == "small") {
        this.small = true;
        return;
      }
      if (type == "same") {
        this.same = true;
      }
    },
    mos_down() {
      this.ani_hover = true;
    },
    up() {
      this.ani_hover = false;
    },
    cl1() {
      this.$emit("click");
    }
  }
};
</script>
<style scoped>
button {
  display: inline-block;
  margin: 0;
}
.ani {
  width: 120px;
  height: 40px;
  border: none;
  /* background: #ffffff; */
  background: #409eff;
  font-size: 14px;
  color: white;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
}
.ani_hover {
  /* transform: scale(0.99);
  border: 1px solid #504b48;
  background: white;
  background: rgba(113,127,154);
  color: white; */
  font-weight: 600;
}
.small {
  width: 60px !important;
  height: 30px;
}
.same {
  width: 80px;
  height: 35px;
}
</style>