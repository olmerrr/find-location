import { validateIP } from "./helpers";

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__btn");

ipInput.addEventListener("keydown", handleKey);
btn.addEventListener("click", getData);

function getData() {
  if (validateIP(ipInput.value)) {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_KyPVjpK6mleYPpUP0EOwsoaOItHM8&ipAddress=${ipInput.value}`)
    .then(response => response.json()
    .then(console.log))
  }
 }
 
function handleKey(event) {
  if (event === 'Enter'){
    getData();
  }
}
 
