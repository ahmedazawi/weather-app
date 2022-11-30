import React from "react";
import "../assets/css/SevenDaysCards.css";
import Card from "./card";
const SevenDaysCards = (props) => {
  let id = 1;
  return (
    <div className="small-cards">
      {props.days.map((data, index) => {
        return <Card data={data} key={id++} index={index} />;
      })}
    </div>
  );
};

export default SevenDaysCards;
