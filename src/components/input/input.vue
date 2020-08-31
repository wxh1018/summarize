<template>
  <input class="el-input__inner" v-model="value" type="text" />
</template>
<script>
export default {
  name: "wxh-ipt",
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
    value(v) {
      this.$emit("send", v);
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style >
</style>