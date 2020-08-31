<template>
  <ul>
    <li
      @click="tab(item)"
      :class="{active:active1 == item.id}"
      v-for="item in tabData"
      :key="item.id"
    >{{item.name}}</li>
  </ul>
</template>
<script>
export default {
  name:'wxh-tab',
  props: ["active", "tabData"],
  data() {
    return {
      active1: "",
    };
  },
  components: {},
  computed: {},
  watch: {
    active(v) {
      this.active1 = v;
    },
  },
  created() {
    this.active1 = this.active;
  },
  mounted() {},
  methods: {
    tab(item) {
      this.active1 = item.id;
      if (item.router) {
        this.$router.push(item.router);
      }
      this.$emit("event", item);
    },
  },
};
</script>
<style scoped lang='less'>
ul{
  height: 40px;
  display: inline-block;
  display: flex;
}
li {
  height: 100%;
  list-style: none;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
}
.active {
  color: orange;
}
</style>