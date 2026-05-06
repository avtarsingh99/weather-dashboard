export const StatsGrid = ({ weather }) => {

    const current = weather.current;

    const stats = [
        { label: "Humidity", value: `${current.humidity}%` },
        { label: "Wind Speed", value: `${current.wind_kph} km/h` },
        { label: "Direction", value: `${current.wind_dir}` },
        { label: "Visiblility", value: `${current.vis_km} km` },
        { label: "Pressure", value: `${current.pressure_mb} mb` },
        { label: "UV Index", value: `${current.uv}` }
    ];

    return (
        <div>
            <h3>Weather Stats</h3>
            {stats.map((stat) => {
                return (
                        <div key={stat.label}>
                            <p>{stat.label}</p>
                            <p>{stat.value}</p>
                        </div>
                );
            })}
        </div>
    );
}