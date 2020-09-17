<template>
  <div class="steps">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    active: Number,
  },
  name: "wxh-steps",
  data() {
    return {
      length: 0,
    };
  },
  components: {},
  computed: {
    len() {
      return this.$children.length;
    },
    lastChild() {
      return this.$children[this.len - 1];
    },
    firstChild() {
      return this.$children[0];
    },
  },
  watch: {
    active() {
      this.init();
    },
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.lastChild.getData("last");
      this.firstChild.getData("first");
      this.$children[this.active].getData("bus");
      //走过了几站
      this.$children.forEach((v, id) => {
        if (id < this.active) {
          //走过的
          this.$children[id].pass();
        }
      });
    },
  },
};
</script>
<style scoped >
.steps {
}
.steps .line {
}
</style>