<template>
  <div :class="{show:visibility}" id="map">
    <div class="mapbox" :id="el"></div>
    <el-input v-model="searchmap" class="searchmap" placeholder="搜索地址"></el-input>
    <div class="des_sure">
      <base-btn @click="disno">取消</base-btn>
      <base-btn @click="sure">确认</base-btn>
    </div>
  </div>
</template>
<script>
var map = null;
export default {
  name: "wxh-map",
  model: {
    prop: "lnglat",
    event: "send",
  },
  props: ["lnglat", "visibility", "el"],
  data() {
    return {
      lng_lat: "",
      addclass: false,
      addclass1: false,
      searchmap: "",
    };
  },
  components: {},
  computed: {
    time() {},
  },
  watch: {
    visibility(v) {
      this.addclass1 = true;
    },
    searchmap(v) {
      this.searchVal(v);
    },
  },
  created() {},
  mounted() {
    this.creat_map();
  },
  methods: {
    creat_map() {
      console.log("地图加载");
      let _this = this;
      var sure = document.querySelector("#map1 .sure");

      map = new AMap.Map(this.el, {
        zoom: 10, //级别
        center: [118.397428, 31.90923], //中心点坐标
      });
      if (this.lnglat && this.lnglat.indexOf(",") != -1) {
        let lng_lat = this.lnglat.split(",");
        let marker = new AMap.Marker({
          position: [lng_lat[0], lng_lat[1]],
          offset: new AMap.Pixel(-13, -30),
        });
        // overlays.push(marker);
        map.add(marker);
        map.setCenter([lng_lat[0], lng_lat[1]]);
        this.lng_lat = this.pile;
      }

      //点击画点
      map.on("click", showInfoClick);
      function showInfoClick(e) {
        map.clearMap();
        let lng = e.lnglat.getLng();
        let lat = e.lnglat.getLat();
        let marker = new AMap.Marker({
          position: [lng, lat],
          offset: new AMap.Pixel(-13, -30),
        });
        _this.lng_lat = `${lng},${lat}`;
        map.add(marker);
        map.setFitView();
      }
    },
    searchVal(v) {
      // 获取输入提示信息
      function autoInput() {
        var keywords = v;
        AMap.plugin("AMap.Autocomplete", function () {
          // 实例化Autocomplete
          var autoOptions = {
            city: "江苏省",
          };
          var autoComplete = new AMap.Autocomplete(autoOptions);
          autoComplete.search(keywords, function (status, result) {
            // 搜索成功时，result即是对应的匹配数据
            if (result.tips) {
              let data = result.tips.find((v) => v.id != "").location;
              if (!data) {
                this.base.warn(this, "未找到地址");
                return;
              }
              let lnglat = [data.lng, data.lat];
              map.setZoomAndCenter("14", lnglat);
            }
          });
        });
      }
      autoInput();
    },
    //确认
    sure() {
      // this.$parentvisibility
      // this.$parent.visibility = false
      if (this.lng_lat == "" && this.lnglat == "") {
        console.log("您还未选择坐标点");
        this.base.warn(this, "您还未选择坐标点");
      }
      this.$emit("sure", this.lng_lat);
      this.$emit("send", this.lng_lat);
      this.$emit("close");
      // map.clearMap();
    },
    disno() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
#map {
  position: fixed;
  overflow: hidden;
  left: 50%;
  top: 100px;
  width: 50%;
  height: 70%;
  margin-left: -25%;
  border: 1px solid #409eff;
  border-radius: 10px;
  z-index: 9999;
  transition: all 0.2s linear;
  transform: scale(0);
}
.mapbox {
  position: absolute;
  width: 100%;
  height: 100%;
}
.des_sure {
  position: absolute;
  width: 300px;
  bottom: 50px;
  right: 50px;
}
.show {
  transform: scale(1) !important;
}
.searchmap {
  position: absolute;
  left: 30px;
  top: 30px;
}
</style>