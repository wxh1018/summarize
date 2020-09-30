<template>
  <div class="wrap">
    <wxh-map :visibility.sync="show_map" v-model="lonLat" @sure="sure" />
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
    sure(e) {
      console.log(e);
    },
  },
};
</script>
<style scoped lang="less">
.wrap {
  width: 100%;
  position: relative;
}
</style>
