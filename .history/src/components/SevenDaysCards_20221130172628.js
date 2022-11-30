import React from "react";
import "../assets/css/SevenDaysCards.css";
import Card from "./card";
const SevenDaysCards = (props) => {
  let id = 1;
  return (
    <div className="small-cards">
      {props.days.map((1,data) => {
        return <Card data={data} key={id++} index="1" />;
      })}
    </div>
  );
};

export default SevenDaysCards;
