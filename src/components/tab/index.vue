<template>
  <div>
    <ul :class="{ end: right }">
      <li
        @click="tab(item)"
        :class="{ active: active1 == item.id }"
        v-for="item in tabData"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
// tabData: [
//       { name: "待审", id: 1 },
//       { name: "已审", id: 2 },
//     ],
export default {
  name: "wxh-tab",
  props: {
    active: {
      type: Number,
      default: 1,
    },
    tabData: {
      type: Array,
      required: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active1: this.active,
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    tab(item) {
      if (item.router) {
        this.$router.push(item.router);
      }
      this.active1 = item.id;
      this.$emit("click", item);
    },
  },
};
</script>
<style scoped lang='less'>
ul {
  height: 40px;
  display: inline-block;
  display: flex;
  border-bottom: 1px solid #cccccc;
}
li {
  height: 100%;
  list-style: none;
  border: 1px solid #cccccc;
  border-bottom: none;
  display: flex;
  align-items: center;
  padding: 0 22px;
  cursor: pointer;
  margin-right: 5px;
  font-size: 16px;
  background: white;
  transition: all 0.1s linear;
}
.active {
  color: #409eff;
  border-top: 3px solid #409eff;
  transform: translateY(1px);
}
.end {
  justify-content: flex-end;
}
</style>