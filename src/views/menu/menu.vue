<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      treeData: [
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
              childNodes: null
            },
            {
              id: "72ea281a92854e8ea1fe3bd2d87da3c0",
              text: "个人收藏",
              routeUrl: "/filemanager/favorite",
              imageUrl: "el-icon-notebook-1",
              hasChildren: false,
              itemType: "02",
              extStr: null,
              childNodes: null
            },
            {
              id: "77a41e74523b467aa53a77af1e144cea",
              text: "个人资料",
              routeUrl: "/filemanager/private",
              imageUrl: "el-icon-folder-opened",
              hasChildren: false,
              itemType: "02",
              extStr: null,
              childNodes: null
            },
            {
              id: "8ffd05b7628d470e9a418bb961bfdf66",
              text: "最近浏览",
              routeUrl: "/filemanager/recent",
              imageUrl: "el-icon-view",
              hasChildren: false,
              itemType: "02",
              extStr: null,
              childNodes: null
            },
            {
              id: "9192556041e542fc912b328941b131e0",
              text: "公共资料",
              routeUrl: "/filemanager/public",
              imageUrl: "el-icon-folder-opened",
              hasChildren: false,
              itemType: "02",
              extStr: null,
              childNodes: null
            },
            {
              id: "af569ef172214f37947128833225ee3d",
              text: "班组资料",
              routeUrl: "/filemanager/group",
              imageUrl: "el-icon-folder-opened",
              hasChildren: false,
              itemType: "02",
              extStr: null,
              childNodes: null
            },
            {
              id: "cbb0eba442e94ef589681698f810ad49",
              text: "审核管理",
              routeUrl: "/filemanager/groupsh",
              imageUrl: "el-icon-document-checked",
              hasChildren: false,
              itemType: "02",
              extStr: null,
              childNodes: null
            }
          ]
        },
        {
          id: "f3ab0ae609374bb783a223b6845f7977",
          text: "在线学习",
          routeUrl: null,
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
                  childNodes: null
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {},
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
    }
  }
};
</script>
<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100%;
  border: 1px solid white;
}
</style>
