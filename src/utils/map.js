
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
        var icon = icon || new AMap.Icon({
            size: new AMap.Size(30, 30),
            image: "https://pic.downk.cc/item/5efaae4114195aa5947134de.png",
            imageSize: new AMap.Size(30, 30),
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
        infoWindow1.setContent(e.target.content);
        infoWindow1.open(map, lnglat);
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
}
