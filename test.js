const API_KEY = '1d9c68d39387b83f833a842447935646';

const loadTemparature = async () =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
const displayWeather = async() =>{
    const weather = await loadTemparature ();
    console.log(weather);
    const temperature = document.getElementById('temperature');
    temperature.innerText = `${weather.main.temp}`;
}
displayWeather();

// document.getElementById('weather-btn').addEventListener('click', function(){
//    const weatherField = document.getElementById('weather-field');
//    const weatherFieldText = weatherField.value;
//    console.log(weatherFieldText);
// })
loadTemparature('dhaka');