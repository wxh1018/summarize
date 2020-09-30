<template>
  <div>
    <ul :class="{ end: right }">
      <li
        @click="tab(item)"
        :class="{ active: active1 == item }"
        v-for="(item, id) in label"
        :key="item + '-' + id"
      >
        {{ item }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wxh-tab-group",
  props: {
    active: {
      type: String,
      default: "1",
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active1: this.active,
      label: [],
    };
  },
  components: {},
  computed: {
    labels1() {
      return this.$children.map((v) => v.getlabel());
    },
  },
  watch: {},
  mounted() {
    this.label = this.$children.map((v) => v.getlabel());
  },
  methods: {
    tab(item) {
      if (item.router) {
        this.$router.push(item.router);
      }
      this.active1 = item;
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