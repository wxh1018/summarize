<template>
  <el-menu
    :default-active="active"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    menu-trigger="hover"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <Menu :list="list" mode="h" />
  </el-menu>
</template>
<script>
import Menu from "./menu.vue";
export default {
  data() {
    return {
      active: this.$route.name,
      list: [
        {
          id: "f3ab0ae609374bb783a223b6845f7976",
          text: "资料管理",
          routeUrl: "/ui/home.html",
          imageUrl: "el-icon-folder",
          hasChildren: true,
          itemType: "01",
          extStr: null,
          childNodes: [
            {
              id: "40b922b5d4c74706b8930d0b7eb34632",
              text: "列表查询",
              routeUrl: "/tagmanager/searchmodule",
              imageUrl: "el-icon-search",
              hasChildren: false,
              itemType: "02",
              extStr: null,
              childNodes: null,
            },
            {
              id: "72ea281a92854e8ea1fe3bd2d87da3c0",
              text: "个人收藏",
              routeUrl: "/filemanager/favorite",
              imageUrl: "el-icon-notebook-1",
              hasChildren: false,
              itemType: "02",
              extStr: null,
              childNodes: null,
            },
          ],
        },
        {
          id: "f3ab0ae609374bb783a223b6845f7977",
          text: "在线学习",
          routeUrl: "",
          imageUrl: "el-icon-collection",
          hasChildren: true,
          itemType: "01",
          extStr: null,
          childNodes: [
            {
              id: "396ebd72ac95461286607ae4d61305b1",
              text: "课程中心",
              routeUrl: "/kczx",
              imageUrl: null,
              hasChildren: true,
              itemType: "01",
              extStr: null,
              childNodes: [
                {
                  id: "29e69f87207c41058a739f8771bbd526",
                  text: "在线课程",
                  routeUrl: "/kczx/zxkc/zxkclist",
                  imageUrl: null,
                  hasChildren: false,
                  itemType: "03",
                  extStr: "tagsetid(待关联)",
                  childNodes: null,
                },
              ],
            },
          ],
        },
        {
          id: "f3ab0ae609374bb783a223b6845f76",
          text: "资料管理2  ",
          imageUrl: "el-icon-folder",
          routeUrl: "/kczx/zxkc/zxkclist",
        },
      ],
    };
  },
  components: { Menu },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped lang="less">
.el-menu {
  width: 200px;
  height: 100%;
}
</style>
