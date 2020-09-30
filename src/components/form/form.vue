<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item v-for="(item, key) in form1" :key="key" :label="item.label">
      <el-input v-if="item.type == 'input'" v-model="form[item.key]"></el-input>
      <el-select
        v-if="item.type == 'select'"
        v-model="form[item.key]"
        filterable
        :placeholder="item.placeholder"
      >
        <el-option
          v-for="(op, opid) in item.options"
          :key="opid"
          :label="op.label"
          :value="op.value"
        >
        </el-option>
      </el-select>

      <el-radio
        v-if="item.type == 'radio'"
        v-for="(ra, rai) in item.options"
        :key="ra + rai"
        v-model="form[item.key]"
        :label="ra.label"
        >{{ ra.text }}</el-radio
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "wxh-form",
  props: {
    form1: {
      type: Array,
      default: [],
    },
    value: {
      type: Object,
      default: function () {
        return;
      },
    },
  },
  model: {
    prop: "value",
    event: "up",
    type: function () {
      return {};
    },
  },
  data() {
    return {
      form: this.value,
    };
  },
  components: {},
  computed: {
    keys() {
      return this.form1.map((v) => v.key);
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.keys.forEach((v) => {
      if (!this.form[v]) {
        this.$set(this.form, v, "");
      }
    });
  },
  methods: {
    send() {
      this.$emit("up", this.form);
    },
  },
};
</script>
<style scoped lang='less'>
</style>