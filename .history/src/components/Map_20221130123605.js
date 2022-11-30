import React, { useState, useEffect } from "react";
import { googleMapAPI } from "../assets/data/Api";
const Map = (city) => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  useEffect(() => {
    // getUserCoordinates();
    console.log(lat, long);
  }, []);
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
