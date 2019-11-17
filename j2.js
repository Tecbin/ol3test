var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.Stamen({
        layer: 'toner'
      })
    })
  ],
  interactions: ol.interaction.defaults({
    altShiftDragRotate: false,
    rotate: false
  }),
  target: 'olMap',
  view: view,
});

var windy;
var canvas = document.getElementById('windyMap');
function refreshWindy() {
  if(!windy) {
    return;
  }
  windy.stop();
  var mapSize = map.getSize();
  var extent = map.getView().calculateExtent(mapSize);
  extent = ol.proj.transformExtent(extent, 'EPSG:3857', 'EPSG:4326');

  canvas.width = mapSize[0];
  canvas.height = mapSize[1];

  windy.start(
    [[0,0], [canvas.width, canvas.height]],
    canvas.width,
    canvas.height,
    [[extent[0], extent[1]],[extent[2], extent[3]]]
  );
}

fetch('http://esri.github.io/wind-js/gfs.json').then(function(response) {
  return response.json();
}).then(function(json) {
  windy = new Windy({canvas: canvas, data: json });
  refreshWindy();
});

map.on('moveend', refreshWindy);