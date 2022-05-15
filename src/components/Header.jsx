import React from "react";
import menuIcon from "../components/img/menu_icon.png";

import "../components/header.css";
import Search from "./Search";

export default function Header({ changeVisible }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__menu">
              <div>
                <img src={menuIcon} alt="" />
              </div>
            </div>
            <div className="header__title">Weather</div>
            <Search changeVisible={changeVisible} />
          </div>
        </div>
      </header>
    </>
  );
}
