const fetch = require('node-fetch');

// Fetch weather data from OpenWeatherMap API


const apiKey = 'af316cad0a2ca4b6a32e9e25d848ec48';
const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const weatherCondition = data.weather[0].description;

        console.log(`Temperature: ${temperature}°C`);
        console.log(`Humidity: ${humidity}%`);
        console.log(`Weather Condition: ${weatherCondition}`);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
}

getWeather();