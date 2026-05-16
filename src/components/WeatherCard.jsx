import React from "react";

export const WeatherCard = ({ weather }) => {

    const current = weather.current;
    const location = weather.location;
    const day = weather.forecast.forecastday[0].day;
    const date = new Date(location.localtime).toLocaleDateString("en-GB", {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })

    return (
        <div className="weather-card">
            <div className="top-elements">
                <div className="city-title">
                    <h2>{location.name}</h2>
                    <p>{date} | {location.country}</p>
                </div>
                <div className="current-weather">
                    <span>{current.condition.text}</span>
                </div>
            </div>
            <div className="bottom-elements">
                <div className="curr-temp">
                    <h2>{Math.round(current.temp_c)}° C</h2>
                    <p>Feels like {Math.round(current.feelslike_c)}°C</p>
                </div>
                <div className="high-low">
                    <p>High / Low</p>
                    <span>{Math.round(day.maxtemp_c)}° / {Math.round(day.mintemp_c)}°</span>
                </div>
                <div className="rain-chance">
                    <p>Rain Probability Today</p>
                    <span className="rain">{day.daily_chance_of_rain}% overall chance</span>
                </div>
            </div>
        </div>
    );
}