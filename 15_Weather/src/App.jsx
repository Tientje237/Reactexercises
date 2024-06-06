import React, { useState } from 'react';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const apiKey = 'fd916d7e7f32a3704ce8f5b479862c3a';

  const fetchWeather = async (e) => {
    e.preventDefault();
    console.log(`Fetching weather for city: ${city}`);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      console.log('API Response:', data);
      if (response.ok) {
        setWeather(data);
      } else {
        console.error('Error fetching weather data:', data);
        setWeather(null);
      }
    } catch (error) {
      console.error('Error:', error);
      setWeather(null);
    }
  };

  const getBackgroundClass = () => {
    if (!weather) return 'bg-gray-100';
    const weatherId = weather.weather[0].id;
    if (weatherId >= 200 && weatherId < 300) return 'bg-gray-400'; // Thunderstorm
    if (weatherId >= 300 && weatherId < 600) return 'bg-blue-400'; // Drizzle or Rain
    if (weatherId >= 600 && weatherId < 700) return 'bg-blue-200'; // Snow
    if (weatherId >= 700 && weatherId < 800) return 'bg-gray-300'; // Atmosphere (fog, sand, etc.)
    if (weatherId === 800) return 'bg-yellow-200'; // Clear sky
    if (weatherId > 800) return 'bg-gray-200'; // Clouds
    return 'bg-gray-100';
  };

  return (
    <div className={`App p-4 min-h-screen ${getBackgroundClass()}`}>
      <form onSubmit={fetchWeather} className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">Get Weather</button>
      </form>
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default App;