import React from "react";
import "../components/Modal.css";

export default function Modal({ city, change, show, visible }) {
  const rootClasses = ["popAp"];

  if (visible) {
    rootClasses.push("active");
  }
  return (
    <div className={rootClasses.join(" ")}>
      <div className="popAp__contain">
        <div className="popAp__content">
          <input className="input" type="text" value={city} onChange={change} />
          <button className="input__button" onClick={show}>
            FIND
          </button>
        </div>
      </div>
    </div>
  );
}
