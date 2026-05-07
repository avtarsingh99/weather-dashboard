const API_KEY = "3a7e8d66f20e45d1a4c64037260405";
const BASE_URL = "https://api.weatherapi.com/v1";

export const fetchWeatherByCity = async (city) => {

    const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=yes&alert=yes`);

    if(!response.ok){
        throw new Error("City not found!");
    }
    const data = await response.json();
    return data;
} 