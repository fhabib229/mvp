

"const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZmhhYmliMjI5IiwiYSI6ImNqdGh4bGdpbTJqZ200NGw2MHZjeWRxNmQifQ.tlDfQTj0WG4yCieBwyqrmQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/fhabib229/cjthy79rr0ccb1fm8ok7tvzkc',
center: [ -122.317768, 47.67894],
zoom: 10
});

const popup = new mapboxgl.Popup()
.setLngLat([ -122.317768, 47.67894])
.setHTML('<h3>Home!</h3>')
.addTo(map);

const marker = new mapboxgl.Marker()
.setLngLat([-121.7231, 47.4880])
.addTo(map);