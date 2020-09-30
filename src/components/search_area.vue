<template>
  <div class="wrap">
    <div id="map"></div>
    地区
    <input type="text" v-model="province" />
    属性
    <input type="text" v-model="words" />
    页数
    <input type="text" v-model="pagesize" />
    <button @click="Get">执行</button>
    <button @click="download" v-r>下载</button>
    tip:火车站 = 客运火车站
    <table id="table">
      <tr>
        <td>name</td>
        <td>省</td>
        <td>市</td>
        <td>区</td>
        <td>经度</td>
        <td>纬度</td>
        <td>类型</td>
      </tr>
      <tr v-for="(item, id) in tabledata" :key="id">
        <td>{{ item.name }}</td>
        <td>{{ item.pname }}</td>
        <td>{{ item.cityname }}</td>
        <td>{{ item.adname }}</td>
        <td>{{ item.location.split(",")[0] }}</td>
        <td>{{ item.location.split(",")[1] }}</td>
        <td>{{ item.typecode }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
var map = null;
import FileSaver from "file-saver";
import XLSX from "xlsx";
import axios from "axios";
import $ from "jquery";
export default {
  name:'se',
  data() {
    return {
      tabledata: [],
      pagesize: 50,
      province: "江苏省",
      words: "火车站",
      three: ["江苏省", "安徽省", "浙江省", "上海市"],
      cookie:
        'PSTM=1575867697; BAIDUID=AC3AA4DE56626803CBE7310FBCDF1D30:FG=1; BDUSS=dhaVdOVHYzMWdSaUhKOEpOWEE0UzZPRnhCU0FYNFUzWGVWM0N6ODU0RmFveU5lSUFBQUFBJCQAAAAAAAAAAAEAAAA5p06QxNDIy77N0qq76gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoW~F1aFvxdVl; BIDUPSID=B0F813928E15BD7FE9D5E8C89E69CE70; BDSFRCVID=EmKOJeCmHCyyQWvuiYxCMMPTggKK0gOTHlxkwSEhjKiQQHIVJeC6EG0Ptf8g0KubbD7YogKK0gOTH6KF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tJPq_C05tDP3eb5m-trSqRIeh2T22-uXKK_sKR6cBhcqEn6SLnrB0q-B5frkhUJuBGRn0b3cWKJJ8UbShb7O5ptkMM6ialoIWg5paJ5nJq5nhMJmb67JDMP0-x5Rthcy523ion3vQpP-OpQ3DRoWXPIqbN7P-p5Z5mAqKl0MLPbtbb0xXj_0-nDSHHLJtjLj3H; MCITY=-%3A; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; H_PS_PSSID=32097_1456_31326_32139_32046_32231_32090_32260_26350; Hm_lvt_d101ea4d2a5c67dab98251f0b5de24dc=1593503807,1594090571; bdindexid=9hc9on4m8mn2nriruvqd2i70g7; Hm_lpvt_d101ea4d2a5c67dab98251f0b5de24dc=1594090766; RT="z=1&dm=baidu.com&si=ko9r2w8ai7&ss=kcbcd7zq&sl=o&tt=kmx&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=cpq1"'
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.creatmap();
    this.getMessage();
    this.basefn.base.suc(this, "123");
  },
  methods: {
    creatmap() {
      map = new AMap.Map("map", {
        zoom: 10, //级别
        zooms: [9, 13],
        zoomEnable: true,
        doubleClickZoom: true,
        center: [118.820041, 32.014397] //中心点坐标
        // mapStyle: 'amap://styles/2e6afbd914a6e62acc0112b25c51897b', //设置地图的显示样式
        // mapStyle:'amap://styles/d13369b65d8f8a5b0efbc515527e1cd9'
      });
    },
    search() {
      this.clear();
      let that = this;
      var keywords = this.words;
      let n = 0;
      // AMap.plugin("AMap.PlaceSearch", function() {
      right();
      function right() {
        n++;
        let autoOptions = {
          city: that.province,
          pageSize: 100, // 单页显示结果条数
          pageIndex: n, // 页码
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: map // 展现结果的地图实例
          // panel: "panel", // 结果列表将在此容器中进行展示。
          // autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        };

        var placeSearch = new AMap.PlaceSearch(autoOptions);
        placeSearch.search(keywords, (a, result) => {
          if (!result.poiList) {
            console.log(`共${n}页数据……${that.tabledata.length}条数据`);
            that.download();
            return;
          }
          let data = result.poiList.pois;
          if (data.length == 0) {
            console.log(`共${n}页数据……${that.tabledata.length}条数据`);
            if (that.tabledata.length != 0) {
              that.download();
            }
            // if(that.province)
            return;
          }
          that.tabledata = that.tabledata.concat(data);
          right();
        });
      }
      // });
    },
    clear() {
      this.tabledata = [];
    },
    download() {
      let that = this;
      //此处传入table的DOM节点
      let et = XLSX.utils.table_to_book(document.getElementById("table"));
      let etout = XLSX.write(et, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([etout], {
            type: "application/octet-stream"
          }),
          `${that.province}${that.words}.xlsx`
        ); //trade-publish.xlsx 为导出的文件名
      } catch (e) {
        console.log(e, etout);
      }
      return etout;
    },
    Get() {
      let n = 0;
      let p = 0; //省下标
      let that = this;
      that.tabledata = [];
      function right() {
        n++;
        axios
          .get(
            `https://restapi.amap.com/v3/place/text?s=rsv3&children=&key=296883b20f742d5ee80a9e53bd4c48e2&city=${that.three[p]}&offset=50&page=${n}&citylimit=true&extensions=all&language=zh_cn&callback=jsonp_998018_&platform=JS&logversion=2.0&appname=http%3A%2F%2Flocalhost%3A8081%2F&csid=74CBF961-BE14-47A4-BC56-A537F974284E&sdkversion=1.4.15&keywords=${that.words}`
          )
          .then(res => {
            let str = res.data + "";
            let str1 = str.substring(14, str.length - 1);
            let a = JSON.parse(str1);
            let data = a.pois;
            that.tabledata = that.tabledata.concat(data);
            if (data.length == 0) {
              p++;
              n = 0;
              if (p == 4) {
                that.type();
                return;
              }
            }
            right();
          });
      }
      right();
    },
    type() {
      if (this.words == "货运火车站") {
        this.tabledata = this.tabledata.filter(v => v.typecode == 150210);
      }
      alert("共" + this.tabledata.length + "条数据");
      console.log("共" + this.tabledata.length + "条数据");
    },
    getMessage() {
      // $cookie
      // this.$cookie.set
      axios
        .get("/api", {
          params: {
            area: 160,
            word: [[{ name: "盐城", wordType: 1 }]],
            startDate: "2020-06-30",
            endDate: "2020-07-06"
            // cookies:'dhaVdOVHYzMWdSaUhKOEpOWEE0UzZPRnhCU0FYNFUzWGVWM0N6ODU0RmFveU5lSUFBQUFBJCQAAAAAAAAAAAEAAAA5p06QxNDIy77N0qq76gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoW~F1aFvxdVl'
          }
        })
        .then(res => {
          console.log(res);
        });
      // PSTM=1575867697; BAIDUID=AC3AA4DE56626803CBE7310FBCDF1D30:FG=1; BDUSS=dhaVdOVHYzMWdSaUhKOEpOWEE0UzZPRnhCU0FYNFUzWGVWM0N6ODU0RmFveU5lSUFBQUFBJCQAAAAAAAAAAAEAAAA5p06QxNDIy77N0qq76gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoW~F1aFvxdVl; BIDUPSID=B0F813928E15BD7FE9D5E8C89E69CE70; BDSFRCVID=EmKOJeCmHCyyQWvuiYxCMMPTggKK0gOTHlxkwSEhjKiQQHIVJeC6EG0Ptf8g0KubbD7YogKK0gOTH6KF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tJPq_C05tDP3eb5m-trSqRIeh2T22-uXKK_sKR6cBhcqEn6SLnrB0q-B5frkhUJuBGRn0b3cWKJJ8UbShb7O5ptkMM6ialoIWg5paJ5nJq5nhMJmb67JDMP0-x5Rthcy523ion3vQpP-OpQ3DRoWXPIqbN7P-p5Z5mAqKl0MLPbtbb0xXj_0-nDSHHLJtjLj3H; MCITY=-%3A; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; H_PS_PSSID=32097_1456_31326_32139_32046_32231_32090_32260_26350; Hm_lvt_d101ea4d2a5c67dab98251f0b5de24dc=1593503807,1594090571; bdindexid=9hc9on4m8mn2nriruvqd2i70g7; Hm_lpvt_d101ea4d2a5c67dab98251f0b5de24dc=1594090766; RT="z=1&dm=baidu.com&si=ko9r2w8ai7&ss=kcbcd7zq&sl=o&tt=kmx&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=cpq1"
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  border: 1px solid white;
}
#map {
  width: 30px;
  height: 10px;
}
</style>
