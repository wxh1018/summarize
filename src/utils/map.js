export default {
    setPolyline(arr) {
        return new AMap.Polyline({
            path: arr,
            isOutline: true,
            outlineColor: "#eb5e28",
            borderWeight: 2,
            strokeColor: "#eb5e28",
            strokeOpacity: 1,
            strokeWeight: 0.1,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            lineJoin: "round",
            lineCap: "round",
            zIndex: 50,
        });
    },
}