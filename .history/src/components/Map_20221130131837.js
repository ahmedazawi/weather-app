import React from "react";
import { googleMapAPI } from "../assets/data/Api";

const Map = (city, lan, lon) => {
  return (
    <div>
      <iframe
        className="map"
        title="map"
        width="100%"
        height="270"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${city}&lat=${lan}&lon=${lon}`}
      ></iframe>
    </div>
  );
};
export default Map;
