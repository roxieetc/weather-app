// VARIABLES AND QUERY SELECTORS
const apiKey = "f03af26db0d14f2cecc2d49dacd33a21"
const url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="
const inputField = document.querySelector('.search');
const searchButton = document.querySelector('.select');
const statusIcon = document.querySelector('.status-img');


// FUNCTION TO FETCH API DATA
async function getWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°F';
    document.querySelector(".description").innerHTML = data.weather[0].main;
    document.querySelector(".feels-like").innerHTML = 'Feels Like: ' + Math.round(data.main.feels_like) + '°F';
    document.querySelector(".min-temp").innerHTML = 'Min: ' + Math.round(data.main.temp_min) + '°F';
    document.querySelector(".max-temp").innerHTML = 'Max: ' + Math.round(data.main.temp_max) + '°F';

    if(data.weather[0].main == 'Clear') {
        statusIcon.src = 'assets/sunny.svg';
    } else if (data.weather[0].main == 'Clouds') {
        statusIcon.src = 'assets/cloud.svg'
    } else if (data.weather[0].main == 'Mist') {
        statusIcon.src = 'assets/mist.svg'
    } else if (data.weather[0].main == 'Fog') {
        statusIcon.src = 'assets/mist.svg'
    } else if (data.weather[0].main == 'Snow') {
        statusIcon.src = 'assets/snowflake.svg'
    } else if (data.weather[0].main == 'Rain') {
        statusIcon.src = 'assets/rain.svg'
    } else if (data.weather[0].main == 'Drizzle') {
        statusIcon.src = 'assets/rain.svg'
    } else if (data.weather[0].main == 'Thunderstorm') {
        statusIcon.src = 'assets/thunderstorm.svg'
    } else if (data.weather[0].main == 'Haze') {
        statusIcon.src = 'assets/mist.svg'
    }
}

searchButton.addEventListener("click", () => {
    getWeather(inputField.value);
})