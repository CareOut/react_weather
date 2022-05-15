import React from "react";
import searchIcon from "../components/img/search_icon.png";
import "../components/Search.css";

export default function Search({ changeVisible }) {
  return (
    <div className="header__search">
      <div onClick={changeVisible}>
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}
