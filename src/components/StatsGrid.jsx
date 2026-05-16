export const StatsGrid = ({ weather }) => {

    const current = weather.current;

    const stats = [
        { key: "Humidity", value: `${current.humidity}%` },
        { key: "Wind Speed", value: `${current.wind_kph} km/h` },
        { key: "Direction", value: `${current.wind_dir}` },
        { key: "Visiblility", value: `${current.vis_km} km` },
        { key: "Pressure", value: `${current.pressure_mb} mb` },
        { key: "UV Index", value: `${current.uv}` }
    ];

    return (
        <div className="stat-cards">
            {stats.map((stat) => {
                return (
                        <div className="stat" key={stat.key}>
                            <p>{stat.key}</p>
                            <span>{stat.value}</span>
                        </div>
                );
            })}
        </div>
    );
}