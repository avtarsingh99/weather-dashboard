import './App.css'
import useWeather from './hooks/useWeather';
import { WeatherCard } from './components/WeatherCard';
import { StatsGrid } from './components/StatsGrid';
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
        <SearchBar city={(newCity) => setCity(newCity)} />
      </div>
      {loading && (
        <p>Loading weather data, please wait....</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      {weather && !loading && !error && (
        <>
          <WeatherCard weather={weather} />
          <h3 className='section-heading'>Humidity & Wind</h3>
          <StatsGrid weather={weather} />
          <h3 className='section-heading'>Sun & Moon</h3>
          <SunMoon weather={weather} />
        </>
      )}
    </div>
  )
}

export default App
