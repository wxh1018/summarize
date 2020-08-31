<template>
  <input class="el-input__inner" v-model="value" type="text" />
</template>
<script>
export default {
  name: "wxh-ipt-num",
  model: {
    prop: "ipt",
    event: "send",
  },
  props: ["ipt"],
  data() {
    return {
      value: "",
    };
  },
  components: {},
  computed: {},
  watch: {
    ipt(v) {
      this.value = v;
    },
    value(v, old) {
      if (isNaN(v)) {
        this.value = old;
      } else {
        this.$emit("send", v);
      }
    },
  },
  created() {
    this.value = this.ipt;
  },
  mounted() {},
  methods: {},
};
</script>
<style >
</style>