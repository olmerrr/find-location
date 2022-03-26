import { validateIP } from "./helpers";

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__btn");
const ipInfo = document.getElementById('ip');
const locationInfo = document.getElementById('location');
const utcInfo = document.getElementById('utc');
const ispInfo = document.getElementById('isp');

// console.log(ipInfo,locationInfo,utcInfo,ispInfo);
ipInput.addEventListener("keydown", handleKey);
btn.addEventListener("click", getData);

function handleKey(event) {
  if (event.key === 'Enter'){
    getData();
  }
}

 function getData() {
 
  if (validateIP(ipInput.value)) {
    const response =  fetch(`
    https://geo.ipify.org/api/v2/country?apiKey=at_KyPVjpK6mleYPpUP0EOwsoaOItHM8&ipAddress=${ipInput.value}
    `)
    .then(response => response.json())
    .then(setInfo)
  }

 }
 


function setInfo(mapData){
  console.log(mapData)
  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = `${mapData.location.country} ${mapData.location.region}`;  
  utcInfo.innerText = mapData.location.timezone;
  ispInfo.innerText = mapData.isp;
}
 
