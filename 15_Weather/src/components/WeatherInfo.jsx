import React from 'react';

function WeatherInfo({ weather }) {
  const roundTemp = (temp) => Math.round(temp);

  return (
    <div className="weather-info p-4 border rounded">
      <h2 className="text-2xl font-bold">
        {weather.name} <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
      </h2>
      <p>Temperature: {roundTemp(weather.main.temp)}°C</p>
      <p>Feels like: {roundTemp(weather.main.feels_like)}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherInfo;