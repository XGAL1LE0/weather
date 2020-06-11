import React, { useState } from 'react';
import './App.css';

const api = {
  key: 'YOUR_API_KEY',
};

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metrics&APPID=${YOUR_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  let today = new Date().toDateString();
  // console.log(today);

  return (
    <div className='App'>
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Enter city...'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div>
            <div className='location-box'>
              <div className='location'>
                {weather.name}, {weather.sys.country}
              </div>
              <div className='date'>{today}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp - 273.15)}°c
              </div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
};

export default App;
