export const SunMoon = ({ weather }) => {

    const astro = weather.forecast.forecastday[0].astro;

    return (
        <div className="sun-moon">
            <div className="common-class">
                <p>Sunrise</p>
                <span>{astro.sunrise}</span>
            </div>
            <div className="common-class">
                <p>Sunset</p>
                <span>{astro.sunset}</span>
            </div>
            <div className="moon-phase">
                <div className="left">
                    <p>Moon phase</p>
                    <span>{astro.moon_phase}</span>
                </div>
                <div className="right">
                    <span>{astro.moon_illumination}% lit</span>
                </div>
            </div>
            <div className="common-class">
                <p>Moonrise</p>
                <span>{astro.moonrise}</span>
            </div>
        </div>
    );
};