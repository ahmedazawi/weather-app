import React from "react";
import { googleMapAPI } from "../assets/data/Api";

const Map = (city, lat, long) => {
  console.log("lat:" + lat, "long:" + long);
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
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${city}`}
      ></iframe>
    </div>
  );
};
export default Map;
