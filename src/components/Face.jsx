import React from "react";
import rain from "../components/img/sun-clouds-rain.png";
import lightning from "../components/img/lightning.png";
import "../components/Face.css";
import { Link } from "react-router-dom";

export default function Face() {
  return (
    <section className="beginning">
      <div className="container">
        <div className="main__wrapper">
          <div className="main__img-up">
            <img className="main__img" src={rain} alt="" />
          </div>
          <div className="main__title">WeatherApp</div>
          <div className="main__img-down">
            <img className="main__img" src={lightning} alt="" />
          </div>

          <Link to="Main" className="button__link">
            <div className="main__button">Begin</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
