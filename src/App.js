import './App.css';
import { fetchData } from './fetchData';
import { useState } from 'react';
import React from 'react';
function App() {
  const [query, setQuery] = useState("Mumbai");
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if (e.keyCode === 13) {
      try {
        const data = await fetchData(query);
        setWeather(data);
        setQuery('');
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="App">
      <input type="text" placeholder='Enter..' value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={search} />
      {weather.main && (
        <div className="city">
          <h2 className="city-title">
            <span>{weather.name}</span>
            <sup style={{backgroundColor:'yellow'}}>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C </sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
