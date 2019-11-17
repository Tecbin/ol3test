var layerlv1, layerlv2;
var CreateTQYB = function(obj) {
    var layerlv1arry1 = [];
    var layerlv1arry2 = [];
    var features = new Array(obj.length);
    for (i = 0; i < obj.length; i++) {
        var coordinates = ol.proj.fromLonLat([parseFloat(obj[i].X), parseFloat(obj[i].Y)])
        var feature = new ol.Feature(new ol.geom.Point(coordinates));
        //设置地图图标
        feature.setStyle(iconstyle(obj[i].PIC1));
        feature.id = obj[i].ID;
        feature.X = obj[i].X;
        feature.Y = obj[i].Y;
        /*此处可以设置feature的需要属性*/
        if (obj[i].SLEVEL == "1") {
            layerlv1arry1.push(feature)
        } else {
            layerlv1arry2.push(feature)
        }
    }
    //建立市级图层
    layerlv1 = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: layerlv1arry1
        })
    });
    map.addLayer(layerlv1)
    //建立县级图层
    layerlv2 = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: layerlv1arry2
        })
    });
    map.addLayer(layerlv2)
    //县级图层默认不可见
    layerlv2.setVisible(false);
}
var iconstyle = function(iconmc) {
    return new ol.style.Style({
        image: new ol.style.Icon({
            src: "img/icon/" + iconmc
        })
    });
}
