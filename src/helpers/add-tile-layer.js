import L from 'leaflet';

export function addTileLayer(map) {
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Say Hello <a href="https://github.com/olmerrr/">Yaroslav</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoieWFyb3NsYXZvdiIsImEiOiJjbDE3d2Z3eGYwZnp1M2NwOWlqdDlzZDBsIn0.SVqv_M7JFGcLtwRsxo5jYQ'
}).addTo(map);
}