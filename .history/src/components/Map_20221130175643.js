import React from "react";
import { googleMapAPI } from "../assets/data/Api";

const Map = (props) => {
  const city = props.city.toLowerCase();
  return (
    <div>
      <iframe
        className="map"
        title="map"
        height="270"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?q=${city}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
      ></iframe>
    </div>
  );
};
export default Map;

//https://maps.google.com/maps?q='+YOUR_LAT+','+YOUR_LON+'&hl=es&z=14&amp;output=embed

//https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${city}
