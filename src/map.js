$(() => {
  const latitude = 30;
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


})