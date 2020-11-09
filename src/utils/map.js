
export default class MyMap {
    constructor(map) {
        this.map = map
    }
    drawLine(path) {
        let polyline = new AMap.Polyline({
            path: path,
            isOutline: true,
            outlineColor: "#ffeeff",
            borderWeight: 2,
            strokeColor: "#00a",
            strokeOpacity: 1,
            strokeWeight: 6,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            lineJoin: "round",
            lineCap: "round",
            zIndex: 50,
        });
        polyline.setMap(this.map);
    }
    drawPoint({ content = '<div>msg</div>', lnglat = [118, 32], icon }) {
        let map = this.map
        let infoWindow1 = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        var icon = new AMap.Icon({
            size: new AMap.Size(40, 40),
            image: icon || "https://pic.downk.cc/item/5efaae4114195aa5947134de.png",
            imageSize: new AMap.Size(40, 40),
        });
        let marker = new AMap.Marker({
            icon: icon,
            position: lnglat,
            map,
            // content,
        });
        // marker.setMap(null);
        // infoWindow1.setMap(null);
        // 获取弹窗其他参数
        marker.content = content
        marker.on("mouseover", infoOpen);
        marker.on("mouseout", infoClose);
        map.add(marker);
        function infoClose(e) {
            infoWindow1.close(map, e.target.getPosition());
        }
        function infoOpen(e) {
            infoWindow1.setContent(e.target.content);
            infoWindow1.open(map, e.target.getPosition());
        }
    }
    setInfoWindow({ lnglat, content }) {
        let infoWindow1 = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        infoWindow1.setContent(content);
        infoWindow1.open(this.map, lnglat);
    }
    autoView() {
        this.map.setFitView()
    }
    clear() {
        this.map.clearMap()
    }
    remove(value) {
        this.map.remove(value)
    }
    draw_ani(lnglat) {
        //动画
        let _this = this
        var r = 8000; //半径
        var dis = 300; //扩散速度
        var zoom1;
        function mapMove() {
            var zoom = _this.map.getZoom();
            zoom1 = zoom;
            console.log(zoom);
            if (zoom >= 17) {
                r = 20;
                dis = .5;
            } else if (zoom >= 15) {
                r = 50;
                dis = 1;
            } else if (zoom >= 13) {
                r = 300;
                dis = 10;
            } else if (zoom == 12) {
                r = 800;
                dis = 30;
            } else if (zoom == 11) {
                r = 1500;
                dis = 50;
            } else if (zoom == 10) {
                r = 4000;
                dis = 80;
            } else if (zoom == 9) {
                r = 5000;
                dis = 150;
            } else if (zoom < 9) {
                r = 12000;
                dis = 300;
            } else if (zoom <= 7) {
                r = 15000;
                dis = 500;
            }
            return {
                zoom
            };
        }
        this.map.on("mapmove", mapMove);
        lnglat.forEach(v => {
            let points = new AMap.Circle({
                center: [v[0], v[1]],
                radius: 20, //半径
                borderWeight: 3,
                strokeColor: "#fff",
                strokeOpacity: 0,
                strokeWeight: 6,
                strokeOpacity: 0.2,
                fillOpacity: 0.8,
                strokeStyle: "dashed",
                strokeDasharray: [10, 10],
                // 线样式还支持 'dashed'
                fillColor: "red",
                zIndex: 100
            });
            _this.map.add(points);
            points.on("click", function (event) {
                console.log(event.lnglat);
            });
            let n = 300;
            let zoom = mapMove().zoom;
            if (zoom >= 16) {
                n = 2;
            }
            clearInterval(timer1);
            var timer1 = setInterval(() => {
                ac();
            }, 50);
            function ac() {
                n += dis;
                points.setRadius(n);
                if (points.getRadius() >= r) {
                    n = 5;
                    points.setRadius(n);
                }
            }
        });
    }
}
