const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;



export const fetchWeatherByCity = async (city) => {

    const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=yes&alert=yes`);

    if(!response.ok){
        throw new Error("City not found!");
    }
    const data = await response.json();
    return data;
} 