import React from "react";
import { googleMapAPI } from "../assets/data/Api";

const Map = (props) => {
  console.log(props.lat[0], props.long[0]);
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
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${props.city}?lat=${props.lat[0]}&lon=${props.long[0]}`}
      ></iframe>
    </div>
  );
};
export default Map;
