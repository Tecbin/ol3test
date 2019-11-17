
//创建图层(WMTS方式)
    function crtLayerWMTS(proj, opacity){
	var type = 'img_w';
	
        var projection = ol.proj.get(proj);
        var projectionExtent = projection.getExtent();
        var size = ol.extent.getWidth(projectionExtent) / 256;
        var resolutions = new Array(19);
        var matrixIds = new Array(19);
        for (var z = 1; z < 19; ++z) {
            // generate resolutions and matrixIds arrays for this WMTS
            resolutions[z] = size / Math.pow(2, z);
            matrixIds[z] = z;
        }
 
        var layer = new ol.layer.Tile({
            opacity: opacity,
            source: new ol.source.WMTS({
              attributions: 'Tiles © <a href="http://www.tianditu.com/service/info.html?sid=5292&type=info">天地图</a>',
              url: 'http://t'+Math.round(Math.random()*7)+'.tianditu.com/'+type+'/wmts?tk=df78e9a307d40e0c819e68fb70dfdc15',
              layer: type.substr(0, 3),
              matrixSet: type.substring(4),
              format: 'tiles',
              projection: projection,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent),
                resolutions: resolutions,
                matrixIds: matrixIds
              }),
              style: 'default',
              wrapX: true
            })
          });
        layer.id = type;
        return layer;

