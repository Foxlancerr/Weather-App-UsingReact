import React from "react";
import "./topbutton.css";

function TopButton() {
  const cities = [
    { id: 1, name: "London" },
    { id: 2, name: "UK" },
    { id: 3, name: "Sydney" },
    { id: 4, name: "india" },
    { id: 5, name: "Pakistan" },
  ];
  return (
    <div className="btn-wrapper">
      {cities.map((btn) => {
        return (
          <li className="eachBtn" key={btn.id}>
            {btn.name}
          </li>
        );
      })}
    </div>
  );
}

export default TopButton;
