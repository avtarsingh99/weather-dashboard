import { fetchWeatherByCity } from "../services/weatherApi";
import { useEffect, useState} from "react";

const useWeather = (city) => {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(!city) return;

        const fetchData = async () => {

            try {
                const data = await fetchWeatherByCity(city);
                setWeather(data)
                setLoading(false)
            } catch(err){
                setError(err.message);
                setLoading(false)
            }
        };

        fetchData();
        
    },[city]);

    return{weather, loading, error}
};

export default useWeather;