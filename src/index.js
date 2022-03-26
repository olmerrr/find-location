import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addTileLayer, validateIP } from "./helpers";
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector(".search-bar__input"),
  btn = document.querySelector(".search-bar__btn"),
  ipInfo = document.getElementById('ip'),
  locationInfo = document.getElementById('location'),
  utcInfo = document.getElementById('utc'),
  ispInfo = document.getElementById('isp'),
  mapArea = document.getElementById('map'),
  map = L.map(mapArea, {
    center: [51.5, -0.09],
    zoom: 13
  });

addTileLayer(map);

const iconOnMap = L.icon({
  iconUrl: icon,
  iconSize: [30, 42], // size of the icon
});

L.marker([51.5, -0.09], { icon: iconOnMap }).addTo(map);

ipInput.addEventListener("keydown", handleKey);
btn.addEventListener("click", getData);

function handleKey(event) {
  if (event.key === 'Enter') {
    getData();
  }
}

function getData() {

  if (validateIP(ipInput.value)) {
    const response = fetch(`
    https://geo.ipify.org/api/v2/country?apiKey=at_KyPVjpK6mleYPpUP0EOwsoaOItHM8&ipAddress=${ipInput.value}
    `)
      .then(response => response.json())
      .then(setInfo)
  }
}



function setInfo(mapData) {
  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = `${mapData.location.country} ${mapData.location.region}`;
  utcInfo.innerText = mapData.location.timezone;
  ispInfo.innerText = mapData.isp;
}

