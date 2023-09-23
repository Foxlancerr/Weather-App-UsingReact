import React from "react";
import "./footer.css";
import {
  UilClouds,
  UilCloudShowersAlt,
  UilWindMoon,
} from "@iconscout/react-unicons";

function Footer({tittle}) {
  return (
    <div className="footer">
      <h2 className="footer-tittle">{tittle}</h2>
      <div className="footer-col-box">
        <div className="footer-col">
          <p>time</p>
          <UilClouds></UilClouds>
          <p>10%</p>
        </div>
        <div className="footer-col">
          <p>time</p>
          <UilCloudShowersAlt></UilCloudShowersAlt>
          <p>10%</p>
        </div>
        <div className="footer-col">
          <p>time</p>
          <UilWindMoon></UilWindMoon>
          <p>10%</p>
        </div>
        <div className="footer-col">
          <p>time</p>
          <UilWindMoon></UilWindMoon>
          <p>10%</p>
        </div>
        <div className="footer-col">
          <p>time</p>
          <UilWindMoon></UilWindMoon>
          <p>10%</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
