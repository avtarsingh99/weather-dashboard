export const SunMoon = ({weather}) => {

    const astro = weather.forecast.forecastday[0].astro;

    return(
        <div>
        <h3>Sunrise & Sunset</h3>
            <div>
                <p>Sunrise</p>
                <p>{astro.sunrise}</p>
            </div>
            <div>
                <p>Sunset</p>
                <p>{astro.sunset}</p>
            </div>
            <div>
                <p>Moon phase</p>
                <p>{astro.moon_phase}</p>
                <p>{astro.moon_illumination}% lit</p>
            </div>
            <div>
                <p>Moonrise</p>
                <p>{astro.moonrise}</p>
            </div>
        </div>
    );
};