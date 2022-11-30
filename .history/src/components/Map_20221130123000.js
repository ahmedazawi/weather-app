import React, { useState, useEffect } from "react";
import { googleMapAPI } from "../assets/data/Api";
const Map = (city) => {
  const [state, setState] = useState();
  const position = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) =>
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (newState) => console.log(newState)
    );
    console.log(state.latitude);
    console.log(state.longitude);
  };
  useEffect(() => {
    // position();
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
