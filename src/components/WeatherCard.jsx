import { formatDate, formatTemp } from "../utils/formatWeather";


export const WeatherCard = ({weather}) => {

    const current = weather.current;
    const location = weather.location;
    const day = weather.forecast.forecastday[0].day;

    return(
        <div className="weather-card">
            <h2>{location.name}</h2>
            <p>{formatDate(location.localtime)} | {location.country}</p>
            <span>{current.condition.text}</span>
            <h2>{formatTemp(current.temp_c)}°C</h2>
            <p>Feels like {formatTemp(current.feelslike_c)}°C</p>
            <p>High {formatTemp(day.maxtemp_c)}° / Low {formatTemp(day.mintemp_c)}°</p>
        </div>
    );
}