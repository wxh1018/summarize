<template>
  <div class="suctip_wrap">
    <el-alert :title="title" type="success" center :closable="false"></el-alert>
    <div class="suctip_main">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "wxh-tip-box",
  props: ["title"],
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped >
.suctip_wrap {
  border: 1px solid #8cc96f;
}
.suctip_main {
  border-top: 1px solid #8cc96f;
  padding: 20px;
}
.el-alert--success.is-light {
  color: #3c9311;
  font-weight: 600;
}
</style>