import React from "react";
import "../components/Weather.css";

export default function Weather({ weather }) {
  return (
    <section className="weather__main">
      <div className="container">
        <div className="weather__main-wrapper">
          <div className="weather__main-img">
            <img
              className="weather__icon"
              src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
              alt=""
            />
          </div>
          <div className="weather__main-temperature">
            <div className="temperature__value">{weather.temperature}</div>
            <div className="temperature__init">
              <p>°C</p>
            </div>
          </div>
          <div className="weather__main-city">{weather.name}</div>
          <div className="weather__main-clouds">{weather.clouds}</div>
        </div>
      </div>
    </section>
  );
}
