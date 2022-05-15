import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Modal from "../components/Modal";
import Weather from "../components/Weather";

export default function Main({
  city,
  change,
  weather,
  show,
  visible,
  changeVisible,
}) {
  return (
    <div>
      <Header changeVisible={changeVisible} />
      <Weather weather={weather} />
      <Info weather={weather} />
      <Modal city={city} change={change} show={show} visible={visible} />
    </div>
  );
}
