const weatherCard = document.querySelector('.abia');
const apiKey = 'yourapikey';
const lat = '5.1207';
const lon = '7.3728';

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?` +
            `lat=${lat}&lon=${lon}` +
            `&units=imperial` +
            `&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data && data.main && data.weather) {
            const temp = data.main.temp;
            const condition = data.weather[0].description;
            displayWeather(temp, condition);
        } else {
            useDefaultWeather();
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        useDefaultWeather();
    }
}

function useDefaultWeather() {
    displayWeather(76, 'Sunshine');
}

function displayWeather(temp, condition) {
    if (!weatherCard) return;
    
    weatherCard.innerHTML = `
        <h2>Information</h2>
        <p>☀️ ${Math.round(temp)}°F - ${condition}</p>
        <p>Visit Count: ${getVisitCount()}</p>
    `;
}

function getVisitCount() {
    let count = localStorage.getItem('visitCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitCount', count);
    return count;
}

if (weatherCard) {
    getWeather();
} 