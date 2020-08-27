<template>
  <div class="wrap">
    <Tab :tabData="tabData" :active="activeName" @event="tabevent" />
  </div>
</template>
<script>
import Tab from "@/views/tab/tab.vue";
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
    };
  },
  components: { Tab },
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
