<template>
  <div class="wrap">
    <wxh-map :visibility="show_map" v-model="lonLat" el="mapbig1" @close="show_map = false" />
    <wxh-btn @click="show_map = !show_map">打开地图</wxh-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabData: [
        {
          id: 1,
          name: "about",
        },
        {
          id: 2,
          name: "home",
        },
        {
          id: 3,
          name: "other",
        },
      ],
      iptval: "",
      activeName: "1",
      show_map: false,
      lonLat: "",
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
  },
};
</script>
<style scoped lang="less">
.wrap {
  width: 100%;
  position: relative;
}
</style>
