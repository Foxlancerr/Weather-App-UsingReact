import React from "react";
import { UilSearchAlt, UilMapMarker } from "@iconscout/react-unicons";

import "./input.css";

function InputBox() {
  return (
    <div className="input-box">
      <div className="input-wrapper">
        <input type="text" placeholder="search weathers...." className="input"/>
        <UilSearchAlt className="input-icon"></UilSearchAlt>
        <UilMapMarker className="input-icon"></UilMapMarker>
      </div>
      <div className="foran-height">F*C</div>
    </div>
  );
}

export default InputBox;
