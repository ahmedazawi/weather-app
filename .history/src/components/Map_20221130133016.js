import React from "react";
import { googleMapAPI } from "../assets/data/Api";

const Map = (props) => {
  console.log(props.lat, props.long);
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
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${props.city}`}
      ></iframe>
    </div>
  );
};
export default Map;
