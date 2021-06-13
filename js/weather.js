const API_KEY = "8c8288611a70f77407360bbb2269ef79"

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data =>{
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });//url을 불러오는 함수
}
function onGeoError(){
  alert("Can't find you. No Weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//get current position 함수를 사용하면 실패할대, 성공할때의 함수가 필요해 작성한것임.


