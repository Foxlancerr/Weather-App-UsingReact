import React from "react";
import "./hero.css";
import {
  UilTemperatureMinus,
  UilCloudWind,
  UilCloudSunRain,
  UilCloudShowers,
} from "@iconscout/react-unicons";

function Hero() {
  return (
    <div className="main">
      <div className="upper">
        <p className="date-box">
          <span>Tuesday, 31 May, 2022 |</span>
          <span> Local Time 12:30 PM</span>
        </p>
        <h2 className="tittle">Berlin, DE</h2>
        <p className="clear-Btn">Clear</p>
      </div>
      <div className="middle">
        <UilCloudShowers size={50} />
        <h1>19*</h1>
        <div className="temp-details">
          <div className="temp-row">
            <UilTemperatureMinus size={20} />
            <p>Temp</p>
            <b>20 C*</b>
          </div>
          <div className="temp-row">
            <UilCloudWind size={20} />
            <p>Wind</p>
            <b>23 km/hour</b>
          </div>
          <div className="temp-row">
            <UilCloudSunRain size={20} />
            <p>Huminidity</p>
            <b>60%</b>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="temp-row">
          <UilTemperatureMinus size={20} />
          <p>Rise</p>
          <b>04:45</b>
        </div>
        <div className="temp-row">
          <UilCloudWind size={20} />
          <p>SunSet</p>
          <b>12:00</b>
        </div>
        <div className="temp-row">
          <UilCloudSunRain size={20} />
          <p>High</p>
          <b>45%</b>
        </div>
        <div className="temp-row">
          <UilCloudSunRain size={20} />
          <p>Low</p>
          <b>10%</b>
        </div>
      </div>
    </div>
  );
}

export default Hero;
