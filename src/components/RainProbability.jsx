export const RainProbability = ({weather}) => {

    const day = weather.forecast.forecastday[0].day;

    return(
        <div>
            <h3>Rain Probability Today</h3>
            <span>{day.daily_chance_of_rain}% overall chance</span>
        </div>
    );
}