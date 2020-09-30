<template>
  <div class="wrap">
    <wxh-upload :action="action" v-model="imgs" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      action: "",
      imgs: "",
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='less'>
.wrap {
  width: 100%;
  height: 100%;
}
</style>]