const fetch = require('node-fetch');
const readline = require('readline');

async function getWeather(city, apiKey) {
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const params = new URLSearchParams({
        q: city,
        appid: apiKey,
        units: 'metric'
    });

    const response = await fetch(`${baseUrl}?${params}`);
    if (response.ok) {
        return response.json();
    } else {
        return null;
    }
}

async function main() {
    const apiKey = "0b832017b302383c8acd5c7408736f63";
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter city name: ", async (city) => {
        const weatherData = await getWeather(city, apiKey);

        if (weatherData) {
            console.log(`City: ${weatherData.name}`);
            console.log(`Temperature: ${weatherData.main.temp}°C`);
            console.log(`Weather: ${weatherData.weather[0].description}`);
        } else {
            console.log("City not found or invalid API key");
        }

        rl.close();
    });
}

main();