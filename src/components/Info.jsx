import React from "react";
import "../components/Info.css";

export default function Info({ weather }) {
  return (
    <section className="weather__other">
      <div className="container">
        <div className="weather__other-wrapper">
          <div className="other__wind">
            <div className="wind__value">
              <div className="wind__value-value">{weather.wind}</div>
              <div className="wind__value-init">km/h</div>
            </div>
            <div className="wind__title">Wind</div>
          </div>
          <div className="other__humidity">
            <div className="humidity__value">
              <div className="wind__value-value">{weather.humidity}</div>
              <div className="wind__value-init">%</div>
            </div>
            <div className="humidity__title">Humidity</div>
          </div>
          <div className="other__preseption">
            <div className="preseption__value">
              <div className="wind__value-value">{weather.preseption}</div>
              <div className="wind__value-init">мм </div>
            </div>
            <div className="preseption__title">Pressure</div>
          </div>
        </div>
      </div>
    </section>
  );
}
