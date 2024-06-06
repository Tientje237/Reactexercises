import React from 'react';

function WeatherInfo({ weather }) {
  return (
    <div className="weather-info p-4 border rounded">
      <h2 className="text-2xl font-bold">{weather.name} <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" /></h2>
      <p>Tempratuur: {weather.main.temp}°C</p>
      <p>Voelt als: {weather.main.feels_like}°C</p>
      <p>vochtigheid: {weather.main.humidity}%</p>
      <p>Windsnelheid: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherInfo;
