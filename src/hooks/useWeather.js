import { fetchWeatherByCity } from "../services/weatherApi";
import { useEffect, useState} from "react";

const useWeather = (city) => {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(!city) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await fetchWeatherByCity(city);
                setWeather(data)
            } catch(err){
                setError(err.message);
                setWeather(null);
            } finally {
                setLoading(false)
            }
        };

        fetchData();

        return() => {
            setLoading(false);
        };
    },[city]);

    return{weather, loading, error}
};

export default useWeather;