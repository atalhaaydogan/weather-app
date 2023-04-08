const url = 'https://api.openweathermap.org/data/2.5/'
const apiKey = 'OPENWEATHERMAP_API_KEY';


let searchİnput = document.getElementById('search');
let city = document.getElementsByClassName('city');
let temp = document.getElementsByClassName('temp');
let desc = document.getElementsByClassName('desc');
let minmax = document.getElementsByClassName('minmax');
let searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', getWheather);

function getWheather() {
    fetch(`${url}weather?q=${searchİnput.value}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data); // index??
            city[0].innerHTML = data.name;
            temp[0].innerHTML = Math.round(data.main.temp) + ' °C';
            desc[0].innerHTML = data.weather[0].description;
            minmax[0].innerHTML = Math.round(data.main.temp_min) + ' ℃' + ' / ' + Math.round(data.main.temp_max) + ' ℃';
        })
        .catch(err => alert('Wrong City Name!'))
}


