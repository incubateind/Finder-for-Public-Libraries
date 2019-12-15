                    
/*
 * Moves the map to display over Aligarh.
 */
function moveMapToAligarh(map){
  map.setCenter({lat:27.8974, lng:78.0880});
  map.setZoom(10);
}

//Step 1: initialize communication with the platform

var platform = new H.service.Platform({
  apikey: 'dff4BpK_tXG8p6MY3U8p7faQgxNu4Gici1umsJqhZ4I'
});

var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('mapAligarh'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});

// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

var bubble = new H.ui.InfoBubble({ lng: 78.0880, lat: 27.8974 }, {
  content: '<b>You can search for nearby Developers here!</b>'
});

// Add info bubble to the UI:
ui.addBubble(bubble);

// Now use the map as required...
window.onload = function () {
  moveMapToAligarh(map);
}                  
              