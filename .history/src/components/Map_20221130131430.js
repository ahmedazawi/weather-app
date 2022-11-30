import React, { useContext } from "react";
import { googleMapAPI } from "../assets/data/Api";
import { ContextApi } from "../assets/data/ContextApi";

const Map = (city) => {
  const { lan, lon } = useContext(ContextApi);
  const [lanValue, setLanValue] = lan;
  const [lonValue, setLonValue] = lan;

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
