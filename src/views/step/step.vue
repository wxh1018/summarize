<template>
  <div class="wrap">
    <wxh-steps :active="active">
      <wxh-step>
        <p>上车站</p>
        <p>汽车站</p>
      </wxh-step>
      <wxh-step>
        <p></p>
        <p>汽车站</p>
      </wxh-step>
      <wxh-step>
        <p>下车站</p>
        <p>某某站</p>
      </wxh-step>
      <wxh-step>
        <p></p>
        <p>某某站</p>
      </wxh-step>
      <wxh-step>
        <p></p>
        <p>某某站</p>
      </wxh-step>
      <wxh-step>
        <p>终点站</p>
        <p>汽车站</p>
      </wxh-step>
    </wxh-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
  },
  methods: {},
};
</script>
<style scoped lang='less'>
.wrap {
  width: 100%;
  height: 100%;
}
</style>