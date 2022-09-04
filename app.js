const API_KEY = '1d9c68d39387b83f833a842447935646';

const loadTemparature = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayWeather (data);
    } catch (error) {
        console.log(error);
    }
}
const displayWeather = (weather) =>{
    console.log(weather);
    const weatherCondition = weather.weather[0].main;
    const temperature = document.getElementById('temperature');
    document.getElementById('condition').innerText = weatherCondition;
    temperature.innerText = weather.main.temp;
}

const weatherField = document.getElementById('weather-field');
document.getElementById('weather-btn').addEventListener('click', function(){
   const city = weatherField.value;
   loadTemparature(city);
   const setCity = document.getElementById('city-name');
    setCity.innerText = city;
 })

loadTemparature('Dhaka');