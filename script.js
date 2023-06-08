const apiKey = "f03af26db0d14f2cecc2d49dacd33a21"
const url = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid="

async function getTemperature() {
    const response = await fetch(url + apiKey);
    var data = await response.json();
}

getTemperature()