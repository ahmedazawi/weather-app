import React from "react";
import "../assets/css/SevenDaysCards.css";
import Card from "./card";
const SevenDaysCards = (props) => {
  return (
    <div className="small-cards">
      {props.days.map((data) => {
        return <Card data={data} key="1++" />;
      })}
    </div>
  );
};

export default SevenDaysCards;
