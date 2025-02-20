const weatherCard = document.querySelector('.weather');
const apiKey = 'your-api-key-here';
const lat = '5.1207';
const lon = '7.3728';

async function getWeather() {
    try {
        // Current weather using current weather API
        const currentResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?` +
            `lat=${lat}&lon=${lon}` +
            `&units=imperial` + // Use imperial for Fahrenheit
            `&appid=${apiKey}`
        );

        // 5 day/3 hour forecast API for the 3-day forecast
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?` +
            `lat=${lat}&lon=${lon}` +
            `&units=imperial` + // Use imperial for Fahrenheit
            `&appid=${apiKey}`
        );

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error('Weather API error');
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();
        
        displayWeather(currentData, forecastData);
    } catch (error) {
        console.error('Error:', error);
        displayDefaultWeather();
    }
}

function displayWeather(current, forecast) {
    if (!weatherCard) return;

    // Get unique days from forecast (excluding today)
    const dailyForecasts = {};
    const today = new Date().getDate();
    
    forecast.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.getDate();
        
        // Skip today's forecast
        if (day === today) return;
        
        // Only take the first (earliest) forecast for each day
        if (!dailyForecasts[day] && Object.keys(dailyForecasts).length < 3) {
            dailyForecasts[day] = item;
        }
    });

    // Convert to array and take first 3 days
    const threeDayForecast = Object.values(dailyForecasts).slice(0, 3);

    weatherCard.innerHTML = `
        <h2>Weather</h2>
        <div class="current-weather">
            <img src="https://openweathermap.org/img/w/${current.weather[0].icon}.png" 
                 alt="${current.weather[0].description}">
            <p class="temp">${Math.round(current.main.temp)}°F</p>
            <p class="condition">${current.weather[0].description}</p>
            <p class="humidity">Humidity: ${current.main.humidity}%</p>
            <p class="wind">Wind: ${Math.round(current.wind.speed)} mph</p>
        </div>
        <h3>3-Day Forecast</h3>
        <div class="forecast">
            ${threeDayForecast.map(day => `
                <div class="forecast-day">
                    <p class="date">${new Date(day.dt * 1000).toLocaleDateString('en-US', {weekday: 'short'})}</p>
                    <img src="https://openweathermap.org/img/w/${day.weather[0].icon}.png" 
                         alt="${day.weather[0].description}">
                    <p class="temp">${Math.round(day.main.temp)}°F</p>
                    <p class="condition">${day.weather[0].description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function displayDefaultWeather() {
    if (!weatherCard) return;
    weatherCard.innerHTML = `
        <h2>Weather</h2>
        <div class="current-weather">
            <p class="temp">76°F</p>
            <p class="condition">Sunny</p>
            <p class="humidity">Humidity: 45%</p>
            <p class="wind">Wind: 5 mph</p>
        </div>
        <h3>3-Day Forecast</h3>
        <div class="forecast">
            <div class="forecast-day">
                <p class="date">Thu</p>
                <p class="temp">75°F</p>
                <p class="condition">Sunny</p>
            </div>
            <div class="forecast-day">
                <p class="date">Fri</p>
                <p class="temp">77°F</p>
                <p class="condition">Partly cloudy</p>
            </div>
            <div class="forecast-day">
                <p class="date">Sat</p>
                <p class="temp">74°F</p>
                <p class="condition">Sunny</p>
            </div>
        </div>
    `;
}

// Load weather when page loads
getWeather(); 