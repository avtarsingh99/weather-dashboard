import { formatDate, formatTemp } from "../utils/formatWeather";


export const WeatherCard = ({ weather }) => {

    const current = weather.current;
    const location = weather.location;
    const day = weather.forecast.forecastday[0].day;

    return (
        <div className="weather-card">
            <div className="top-elements">
                <div className="city-title">
                    <h2>{location.name}</h2>
                    <p>{formatDate(location.localtime)} | {location.country}</p>
                </div>
                <div className="current-weather">
                    <span>{current.condition.text}</span>
                </div>
            </div>
            <div className="bottom-elements">
                <div className="curr-temp">
                    <h2>{formatTemp(current.temp_c)}°C</h2>
                    <p>Feels like {formatTemp(current.feelslike_c)}°C</p>
                </div>
                <div className="middle-line"></div>
                <div className="high-low">
                    <p>High / Low</p>
                    <span>{formatTemp(day.maxtemp_c)}° / {formatTemp(day.mintemp_c)}°</span>
                </div>
            </div>
        </div>
    );
}