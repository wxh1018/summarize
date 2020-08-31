<template>
  <div>
    <p v-for="(item,id) in arr" :key="id">{{item}}</p>
  </div>
</template>
<script>
export default {
  name:'wxh-foot',
  props: ['arr'],
  data() {
    return {};
  }
};
</script>
<style scoped>
div {
  width: 100%;
  height: 46px;
  background: rgba(6, 20, 54, 0.2);
  border-top: 1px solid #41a2ff;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  bottom: 0;
}
div p{
  color: white;
  line-height: normal;
  padding: 2px 0;
  box-sizing: border-box;
}
</style>