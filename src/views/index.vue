<template>
  <div class="wrap">
    <wxh-map :visibility="show_map" v-model="logLat" el="mapbig" @close="show_map = false" />
    <wxh-btn>打开地图</wxh-btn>
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
      activeName: "1",
      show_map: false,
      logLat: "",
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    tabevent(v) {
      console.log(v);
    },
  },
};
</script>
<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100%;
}
</style>
