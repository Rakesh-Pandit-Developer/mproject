const cityInput = document.querySelector(".city-input");
const kathmandulLocationButton = document.querySelector(".kathmandu-location-btn");
const ammanLocationButton = document.querySelector(".amman-location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

const createWeatherCard = (cityName, weatherItem, index) => {
    if (index === 0) { // HTML for the main weather card
        return `<div class="details">
                    <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
                    <h6>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </div>
                <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>${weatherItem.weather[0].description}</h6>
                </div>`;
    } else { // HTML for the other five day forecast card
        return `<li class="card">
                    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </li>`;
    }
}

const getWeatherDetails = (cityName, latitude, longitude) => {
    // Call backend to get weather data using cityName or coordinates
    fetch(`https://script.google.com/macros/s/AKfycbxvt5VsYku7CgQ8GiTHHonhWEw9bRHeOEa013-97Xp3Y5kYP4uIRtkS8UISZTBipjJTbA/exec?city=${cityName}&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            // Filter the forecasts to get only one forecast per day
            const uniqueForecastDays = [];
            const fiveDaysForecast = data.list.filter(forecast => {
                const forecastDate = new Date(forecast.dt_txt).getDate();
                if (!uniqueForecastDays.includes(forecastDate)) {
                    return uniqueForecastDays.push(forecastDate);
                }
            });

            // Clearing previous weather data
            cityInput.value = "";
            currentWeatherDiv.innerHTML = "";
            weatherCardsDiv.innerHTML = "";

            // Creating weather cards and adding them to the DOM
            fiveDaysForecast.forEach((weatherItem, index) => {
                const html = createWeatherCard(cityName, weatherItem, index);
                if (index === 0) {
                    currentWeatherDiv.insertAdjacentHTML("beforeend", html);
                } else {
                    weatherCardsDiv.insertAdjacentHTML("beforeend", html);
                }
            });
        })
        .catch(() => {
            alert("An error occurred while fetching the weather forecast!");
        });
}








const getKathmanduCoordinates = () => {
    const name = "Kathmandu";
    const lat = 27.7172;
    const lon = 85.3240;

    getWeatherDetails(name, lat, lon);
};

const getAmmanCoordinates = () => {
    const name = "Amman";
    const lat = 31.9539;
    const lon = 35.9106;

    getWeatherDetails(name, lat, lon);
};

kathmandulLocationButton.addEventListener("click", getKathmanduCoordinates);
ammanLocationButton.addEventListener("click", getAmmanCoordinates);
