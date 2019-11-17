     //   var projection = ol.proj.get('EPSG:4326');//设置坐标系
     //   var projectionExtent = projection.getExtent();
        //分辨率
        var resolutions = [
            1.40625,
            0.703125,
            0.3515625,
            0.17578125,
            0.087890625,
            0.0439453125,
            0.02197265625,
            0.010986328125,
            0.0054931640625,
            0.00274658203125,
            0.001373291015625,
            0.0006866455078125,
            0.00034332275390625,
            0.000171661376953125,
            0.0000858306884765625,
            0.00004291534423828125,
            0.000021457672119140625,
            0.000010728836059570312,
            0.000005364418029785156,
            0.000002682209014892578,
            0.000001341104507446289
        ];
        //瓦片矩阵
        var matrixIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        var centerXY = "121.54449462890625,29.875946044921875";//地图中心点，默认宁波市
  //      var center = ReturnCenter(centerXY);

   /*     var emap_attributions = new ol.Attribution({
            html: '<span class="span_switch" onclick="ChangeToImgMap()">点击切换地图类型</span>'
        });  */
    function EMap() {
            var satemap = new ol.Map({
            /*    controls: ol.control.defaults({
                    attribution: false
                }).extend([
                    new ol.control.MousePosition()//是否显示鼠标所在地图点的经纬度
                ]),  */
             
          //  opacity: opacity,
            source: new ol.source.WMTS({
                      source: new ol.source.WMTS({
                       
              attributions: 'Tiles © <a href="http://www.tianditu.com/service/info.html?sid=5292&type=info">天地图</a>',

                          name: "中国矢量1-14级",
                          url: "http://t0.tianditu.com/vec_c/wmts?tk=df78e9a307d40e0c819e68fb70dfdc15",
                          layer: "cva",
                          style: "default",
                          matrixSet: "c",
                          format: "tiles",
                          wrapX: true,//地图缩小后，防止在一个页面出现多个一样的地图
                          tileGrid: new ol.tilegrid.WMTS({
                              origin: ol.extent.getTopLeft(projectionExtent),
                              resolutions: resolutions.slice(0, 15),//slice方法不清楚的请百度
                              matrixIds: matrixIds.slice(0, 15)
                          })
                      }),
                     maxResolution: resolutions[0],
                     minResolution: resolutions[14]
                  }),
 
     
             
			}
	)  }
		function GetElementId(id) {
            return document.getElementById(id);
        }
        function GetElementsByClassName(className) {
            return document.getElementsByClassName(className);
        }
        //中心点处理
        function ReturnCenter(centerXY) {
            var centerObj = centerXY.split(',');
            var centerX = centerObj[0];
            var centerY = centerObj[1];
            return [parseFloat(centerX), parseFloat(centerY)];//一定要转换下类型，否则拖拽后，地图就消失了
        }  