<template>
  <div v-show="isshow">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tab-item",
  props: {
    label: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    isshow() {
      return this.$parent.active1 == this.label;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getlabel() {
      return this.label;
    },
  },
};
</script>
<style scoped lang='less'>
</style>