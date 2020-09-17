<template>
  <span class="wrapspan">
    <template v-for="(item) in list">
      <el-submenu v-if="item.childNodes" class="a1" :index="item.routeUrl">
        <template slot="title">
          <i :class="item.imageUrl"></i>
          <span>{{item.text}}</span>
        </template>
        <Menu :list="item.childNodes" />
      </el-submenu>
      <el-menu-item v-else :index="item.routeUrl">
        <i :class="item.imageUrl"></i>
        <span slot="title">{{item.text}}</span>
      </el-menu-item>
    </template>
  </span>
</template>
<script>
export default {
  props: ["list"],
  name: "Menu",
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.list);
  },
  methods: {},
};
</script>
<style scoped lang="less">
.wrapspan {
  // display: flex;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%; 
}
.a1 > ul > li {
  padding-left: 60px !important;
}
.el-menu {
  border-right: none;
}
</style>
