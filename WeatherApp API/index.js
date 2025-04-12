
const weatherCard = document.querySelector(".weatherCard");
const cityInput = document.querySelector(".cityInput");
const apiKey = "b832bda708707adb36f623582689c907";


function displayWeatherData(weatherData){
    const cityName = weatherData.name;
    const temp = weatherData.main.temp;
    const humidity = weatherData.main.humidity;
    const description = weatherData.weather[0].description;
    const displayEmoji = getWeatherStyle(description);

    

    document.getElementById("cityDisplay").textContent = cityName;
    document.getElementById("tempuratureDisplay").textContent = `${temp} °C`;
    document.getElementById("humidityDisplay").textContent = `Humidity: ${humidity}%`;
    document.getElementById("descriptionDisplay").textContent = description;
    document.getElementById("emoji").textContent = displayEmoji;
}

async function getWeatherData(){

    const city = cityInput.value;

    try{

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
   
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

    const weatherData = await response.json();
    displayWeatherData(weatherData);
    weatherCard.style.display = "block"

    }catch(error){
        console.error(error);
    }
}

function getWeatherStyle(description){
    const desc = description.toLowerCase();
    switch(true){
    case desc.includes('clear'):
        weatherCard.style.background = "linear-gradient(to right, #fceabb, #f8b500)";
        return '☀️';
    case desc.includes('cloud'):
        weatherCard.style.background = "linear-gradient(to right, #d7d2cc, #304352)";
        return '☁️';
    case desc.includes('rain'):
        weatherCard.style.background = "linear-gradient(to right, #4e54c8, #8f94fb)";
        return '🌧️';
    case desc.includes('drizzle'):
        weatherCard.style.background = "linear-gradient(to right, #89f7fe, #66a6ff)";
        return '🌦️';
    case desc.includes('thunderstorm'):
        weatherCard.style.background = "linear-gradient(to right, #232526, #414345)";
        return '⛈️';
    case desc.includes('snow'):
        weatherCard.style.background = "linear-gradient(to right, #e0eafc, #cfdef3)";
        return '❄️';
    default:
        weatherCard.style.background = "linear-gradient(to right, #83a4d4, #b6fbff)";
        return "🌡️";
        }
}
