$(() => {
  const latitude = 40;
  const longitude = 0;

  // Set up leaflet Map object
  const map = L.map('map').setView([latitude, longitude], 2)

  // Add openstreetmap tile layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>.',
    crossOrigin: true
  }).addTo(map);

  // Will bounce back when scrolling off the map
  map.setMaxBounds([[-90,-180], [90,180]]);

  // Add zoom control with your options
  map.zoomControl.setPosition('topright')

  // Add scale bar
  L.control.scale().addTo(map);

  // Define Leaflet-Geoman Drawing toolbar options
  var options = {
    position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
    drawMarker: true, // adds button to draw markers
    drawPolyline: true, // adds button to draw a polyline
    drawRectangle: true, // adds button to draw a rectangle
    drawPolygon: true, // adds button to draw a polygon
    drawCircle: true, // adds button to draw a cricle
    cutPolygon: true, // adds button to cut a hole in a polygon
    editMode: true, // adds button to toggle edit mode for all layers
    removalMode: true, // adds a button to remove layers
  };

  // Add leaflet.pm controls to the map
  map.pm.addControls(options);

})