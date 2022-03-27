import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addTileLayer, addOffset, getAdress, validateIP } from "./helpers";
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
    getAdress(ipInput.value)
      .then(setInfo)
  }
}



function setInfo(mapData) {

  const { lat, lng, country, region, timezone } = mapData.location;
  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = `${country} ${region}`;
  utcInfo.innerText = timezone;
  ispInfo.innerText = mapData.isp;
  // show on map fn
  map.setView([lat, lng]);
  // show on map fn

  L.marker([lat, lng], { icon: iconOnMap }).addTo(map);
  // check device screen
  if (matchMedia("(max-width: 1023px").matches){
    addOffset(map);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getAdress('102.10.10.1').then(setInfo)
})

