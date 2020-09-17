<template>
  <div ref="zuiin" class="step">
    <slot />
    <div v-if="showicon" class="step_center" v-html="icon"></div>
    <div :class="{lines:!islast,passMark:ispass}">
      <div :class="{point:true,passMark:ispass}" v-if="!showicon"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "wxh-step",
  data() {
    return {
      name: "",
      showicon: false,
      islast: false,
      icon: "",
      ispass: false, //通过
      start: ` <svg t="1600350289333" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3334" width="18" height="18"><path d="M518.4 118.4C292.8 118.4 112 302.4 112 524.8s180.8 406.4 406.4 406.4c222.4 0 406.4-180.8 406.4-406.4S740.8 118.4 518.4 118.4z m0 745.6c-187.2 0-337.6-152-337.6-337.6s152-337.6 337.6-337.6 337.6 152 337.6 337.6S705.6 864 518.4 864z" p-id="3335" fill="#1296db"></path><path d="M518.4 524.8m-214.4 0a214.4 214.4 0 1 0 428.8 0 214.4 214.4 0 1 0-428.8 0Z" p-id="3336" fill="#1296db"></path><path d="M465.6 20.8h104v32h-104zM465.6 976h104v32h-104zM16 467.2h32v104H16zM971.2 468.8h32v104h-32zM499.2 52.8h38.4v193.6h-38.4zM499.2 276.8h38.4v68.8h-38.4zM499.2 699.2h38.4v72h-38.4z" p-id="3337" fill="#1296db"></path><path d="M499.2 801.6h38.4V992h-38.4z" p-id="3338" fill="#1296db"></path><path d="M49.6 502.4h187.2v38.4H49.6zM268.8 502.4h75.2v38.4h-75.2z" p-id="3339" fill="#1296db"></path><path d="M800 502.4h188.8v38.4H800zM694.4 502.4H768v38.4h-73.6z" p-id="3340" fill="#1296db"></path></svg>`,
      end:
        '<svg t="1600350289333" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3334" width="18" height="18"><path d="M518.4 118.4C292.8 118.4 112 302.4 112 524.8s180.8 406.4 406.4 406.4c222.4 0 406.4-180.8 406.4-406.4S740.8 118.4 518.4 118.4z m0 745.6c-187.2 0-337.6-152-337.6-337.6s152-337.6 337.6-337.6 337.6 152 337.6 337.6S705.6 864 518.4 864z" p-id="3335" fill="#d81e06"></path><path d="M518.4 524.8m-214.4 0a214.4 214.4 0 1 0 428.8 0 214.4 214.4 0 1 0-428.8 0Z" p-id="3336" fill="#d81e06"></path><path d="M465.6 20.8h104v32h-104zM465.6 976h104v32h-104zM16 467.2h32v104H16zM971.2 468.8h32v104h-32zM499.2 52.8h38.4v193.6h-38.4zM499.2 276.8h38.4v68.8h-38.4zM499.2 699.2h38.4v72h-38.4z" p-id="3337" fill="#d81e06"></path><path d="M499.2 801.6h38.4V992h-38.4z" p-id="3338" fill="#d81e06"></path><path d="M49.6 502.4h187.2v38.4H49.6zM268.8 502.4h75.2v38.4h-75.2z" p-id="3339" fill="#d81e06"></path><path d="M800 502.4h188.8v38.4H800zM694.4 502.4H768v38.4h-73.6z" p-id="3340" fill="#d81e06"></path></svg>',
      bus:
        '<svg t="1600351457232" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4490" width="18" height="18"><path d="M916.41375605 273.67550419h-18.38244346v-92.17112494c0-30.29219555-22.26605827-66.2803595-49.45136198-79.87301135 0 0-97.86709333-48.93354667-337.22721975-48.93354666S173.99605728 101.6313679 173.99605728 101.6313679c-27.1853037 13.59265185-49.45136197 49.58081581-49.45136197 79.87301135v92.17112494h-18.38244346a55.40623803 55.40623803 0 0 0-55.2767842 55.14733038v55.27678419a55.40623803 55.40623803 0 0 0 55.2767842 55.27678421h18.38244346v377.48736a55.53569185 55.53569185 0 0 0 36.89434074 52.04043851v30.81001087a73.65922765 73.65922765 0 1 0 147.31845531 0v-27.57366518h405.06102517v27.57366518a73.65922765 73.65922765 0 0 0 147.31845532 0v-30.81001087a55.40623803 55.40623803 0 0 0 36.89434074-52.04043851V439.37640297h18.38244346a55.40623803 55.40623803 0 0 0 55.2767842-55.27678421v-55.27678419a55.40623803 55.40623803 0 0 0-55.2767842-55.14733038z m-589.27382123-128.93601184a18.51189728 18.51189728 0 0 1 18.38244345-18.38244346h331.53125136a18.51189728 18.51189728 0 0 1 18.38244346 18.38244346v36.7648869a18.51189728 18.51189728 0 0 1-18.38244346 18.51189728H345.52237827a18.51189728 18.51189728 0 0 1-18.38244345-18.51189728z m-82.85044939 653.74182715a46.08556247 46.08556247 0 1 1 46.08556247-46.08556247 46.2150163 46.2150163 0 0 1-46.08556247 46.08556247z m533.99703704 0a46.08556247 46.08556247 0 1 1 46.08556247-46.08556247 46.08556247 46.08556247 0 0 1-46.08556247 46.08556247z m46.08556247-211.78646123a18.51189728 18.51189728 0 0 1-18.38244346 18.38244346H216.71582025a18.51189728 18.51189728 0 0 1-18.51189728-18.38244346V292.05794765a18.51189728 18.51189728 0 0 1 18.51189728-18.38244346h589.27382123a18.51189728 18.51189728 0 0 1 18.38244346 18.38244346z m0 0" fill="#1296db" p-id="4491"></path></svg>',
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getData(e) {
      this.name = e;
      this.showicon = true;
      if (this.name == "first") {
        this.icon = this.start;
      }
      if (this.name == "last") {
        this.islast = true;
        this.icon = this.end;
      }
      if (this.name == "bus") {
        this.icon = this.bus;
      }
    },
    //走过
    pass() {
      this.ispass = true;
    },
  },
};
</script>
<style scoped>
.step {
  display: flex;
  position: relative;
  height: 50px;
  align-items: center;
}
.step p {
}
.step p:nth-child(1) {
  color: #bebcbc;
  width: 60px;
  text-align: right;
  box-sizing: border-box;
}
.step p:nth-child(2) {
  margin-left: 76px;
}
/* 图标框 */
.step_center {
  position: absolute;
  border: 1px dashed black;
  left: 88px;
  width: 24px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  background: white;
}
/* 线 */
.lines {
  position: absolute;
  top: 20px;
  left: 100px;
  width: 1px;
  height: 120%;
  background: #ebedf0;
  transition: background-color 0.3s;
}
.passMark {
  background: #07c160 !important;
}

.point {
  position: absolute;
  top: 0;
  display: block;
  width: 5px;
  left: -1.55px;
  height: 5px;
  background: #969799;
  border-radius: 50%;
}
</style>