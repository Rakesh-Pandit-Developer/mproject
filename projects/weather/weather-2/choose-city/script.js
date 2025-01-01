// Show/Hide city list on button click
document.getElementById("showCities").addEventListener("click", function() {
    const cityList = document.getElementById("cityList");
    cityList.style.display = cityList.style.display === "none" || cityList.style.display === "" ? "block" : "none";
});

// Handle city click to get weather
document.querySelectorAll("#cityList li").forEach(function(cityItem) {
    cityItem.addEventListener("click", function() {
        const city = cityItem.getAttribute("data-city");
        getWeather(city);
        document.getElementById("cityList").style.display = "none";  // Hide city list after selection
    });
});

function getWeather(city) {
    if (city === "") {
        alert("Please select a city");
        return;
    }

    const apiKey = "YOUR_API_KEY"; // MetaWeather API ka API key yahan daalein
    const url = `https://goweather.herokuapp.com/weather/${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("City not found!");
                return;
            }

            document.getElementById("cityName").textContent = `City: ${city}`;
            document.getElementById("temperature").textContent = `Temperature: ${data.temperature}`;
            document.getElementById("description").textContent = `Description: ${data.description}`;
            document.getElementById("humidity").textContent = `Humidity: ${data.humidity}`;
            document.getElementById("windSpeed").textContent = `Wind Speed: ${data.wind}`;

            // Weather icon based on description
            const description = data.description.toLowerCase();
            let iconClass = '';
            if (description.includes("sunny") || description.includes("clear")) {
                iconClass = 'fas fa-sun';
            } else if (description.includes("cloudy")) {
                iconClass = 'fas fa-cloud';
            } else if (description.includes("rain")) {
                iconClass = 'fas fa-cloud-showers-heavy';
            } else if (description.includes("snow")) {
                iconClass = 'fas fa-snowflake';
            } else {
                iconClass = 'fas fa-smog';
            }

            document.getElementById("weatherIcon").innerHTML = `<i class="${iconClass}"></i>`;
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong!");
        });
}
