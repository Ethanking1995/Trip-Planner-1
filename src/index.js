// console.log('Hello from JavaScript');
// const mapboxgl = require("mapbox-gl");

// mapboxgl.accessToken = 'pk.eyJ1IjoiZXRoYW5raW5nMTk5NSIsImEiOiJjano4bWV2dDkwYmMzM2xud3p5dGZmcGJuIn0.TjHXs3ZsGN5bLwFYRyMpmA';

// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });
// let container = document.createElement('div');

// container.style.width = 32px;
// container.style.height = 39px;
// container.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(container).setLngLat([-74.009151, 40.705086]).addTo(map);

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiZXRoYW5raW5nMTk5NSIsImEiOiJjano4bWV2dDkwYmMzM2xud3p5dGZmcGJuIn0.TjHXs3ZsGN5bLwFYRyMpmA';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);