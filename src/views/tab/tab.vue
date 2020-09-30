<template>
  <div>
    <wxh-tab :tabData="tabData" :active="1" @click="click1"></wxh-tab>
    <pre class="showcode">{{ tab1 }}</pre>
    <pre class="showcode">{{ tabData }}</pre>
    <wxh-tab-group :active="active" @click="click2" right>
      <tab-item label="1">1</tab-item>
      <tab-item label="2">2</tab-item>
      <tab-item label="3">3</tab-item>
      <tab-item label="4">4</tab-item>
    </wxh-tab-group>
    <pre class="showcode">{{ tab2 }}</pre>

  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "1",
      tabData: [
        { name: "待审", id: 1 },
        { name: "已审", id: 2 },
      ],
      tab1: `<wxh-tab :tabData="tabData" :active="1" @click="click1"></wxh-tab>`,
      tab2: ` 
<wxh-tab-group :active="active" @click="click2" right>
  <tab-item label="1">1</tab-item>
  <tab-item label="2">2</tab-item>
  <tab-item label="3">3</tab-item>
  <tab-item label="4">4</tab-item>
</wxh-tab-group>

active: "1",`,
    };
  },
  methods: {
    click1(e) {
      console.log(e);
    },
    click2(e){
      console.log(e);
    }
  },
};
</script>
<style scoped lang='less'>
.showcode {
  padding: 1rem;
  max-height: 35rem;
  line-height: 1.5;
  background-color: #e9ecef;
  overflow: auto;
  margin: 10px 0;
}
</style>