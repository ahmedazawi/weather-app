import React from "react";
import "../assets/css/SevenDaysCards.css";
import Card from "./card";
const SevenDaysCards = (props) => {
  return (
    <div className="small-cards">
      {props.data.map((e) => {
        return <Card />;
      })}
    </div>
  );
};

export default SevenDaysCards;
