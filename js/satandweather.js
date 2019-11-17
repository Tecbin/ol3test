    // 地图设置中心，设置到成都，在本地离线地图 offlineMapTiles刚好有一张zoom为4的成都瓦片
    var center = ol.proj.transform([104.06667, 30.66667], 'EPSG:4326', 'EPSG:3857');
    // 计算熊猫基地地图映射到地图上的范围，图片像素为 550*344，保持比例的情况下，把分辨率放大一些
    var extent = [center[0]- 550*1000/2, center[1]-344*1000/2, center[0]+550*1000/2, center[1]+344*1000/2];



function sat(){
	 // 加载熊猫基地静态地图层
    map.addLayer(new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: '../img/pandaBase.jpg', // 熊猫基地地图
            imageExtent: extent     // 映射到地图的范围
        })
})};
		   
function weather(){
		 // 加载熊猫基地静态地图层
    map.addLayer(new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: '../img/pandaBase.jpg', // 熊猫基地地图
            imageExtent: extent     // 映射到地图的范围
        })
})};