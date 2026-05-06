import './App.css'
import useWeather from './hooks/useWeather';
import { WeatherCard } from './components/WeatherCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { StatsGrid } from './components/StatsGrid';
import { RainProbability } from './components/RainProbability';
import { SunMoon } from './components/SunMoon';
import { useState } from 'react';
import SearchBar from './components/SearchBar';


function App() {

  const [city, setCity] = useState("London")

  const { weather, loading, error } = useWeather(city);

  return (
    <div className='App'>

      <div className='header'>
        <h1>Weather Dashboard</h1>
      </div>

      <div className='search-section'>
      <SearchBar onSearch={(newCity) => setCity(newCity)} />
      </div>
      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {
        weather && !loading && !error && (
          <>
            <WeatherCard weather={weather} />
            <StatsGrid weather={weather} />
            <RainProbability weather={weather} />
            <SunMoon weather={weather} />
          </>
        )
      }
    </div>
  )
}

export default App
