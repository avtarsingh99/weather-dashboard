export const RainProbability = ({weather}) => {

    const day = weather.forecast.forecastday[0].day;

    return(
        <div className="rain-chance">
            <h3>Rain Probability Today</h3>
            <span className="rain">{day.daily_chance_of_rain}% overall chance</span>
        </div>
    );
}