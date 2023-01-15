const API_KEY = "67fdfb04ff99fc680416647cbf7f36a0";

// get usre's location with latitude and longitude
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // https://api.openweathermap.org/data/2.5/weather?lat=49.2194632&lon=-122.9763965&appid=67fdfb04ff99fc680416647cbf7f36a0
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  // call the url
  fetch(url)
  .then(response => response.json())
  .then(data => {
    /// call the weather from url
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);