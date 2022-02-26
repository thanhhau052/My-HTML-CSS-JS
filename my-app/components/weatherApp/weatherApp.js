const search = document.querySelector(".search");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const valueTemp = document.querySelector(".value");
const shortDesc = document.querySelector(".short-desc");
const visibility = document.querySelector(".visibility span");
const sun = document.querySelector(".sun span");
const wind = document.querySelector(".wind span");
const time = document.querySelector(".time");
const content = document.querySelector(".content");
const body = document.querySelector("body");

async function changeWeatherUI(capitalSearch) {
  // capitalSearch > function find lat/lon pass vào apiURL
  // https://openweathermap.org/ > api > current weather data (login get key) > get API
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=21&lon=106&appid=01b65e1569a6eb1d828db60d863c7aeb`;
  // let apiURL = `sdf`;
  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + " m";
    wind.innerText = data.wind.speed + " m/s";
    sun.innerText = data.main.humidity + " %";
    let temp = Math.floor(Number(data.main.temp) - 273);
    valueTemp.innerText = temp;
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : "";
    time.innerText = new Date().toLocaleString("vi");
    if (temp >= 30) {
      body.setAttribute("class", "summer");
    }
    if (temp < 30) {
      body.setAttribute("class", "fall");
    }
    if (temp < 20) {
      body.setAttribute("class", "spring");
    }
    if (temp < 0) {
      body.setAttribute("class", "winter");
    }
  } else {
    content.classList.add("hide");
  }
}
search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let capitalSearch = search.value.trim();
    changeWeatherUI(capitalSearch);
  }
});
