import React, { useState, useEffect } from "react";
import { googleMapAPI } from "../assets/data/Api";
const Map = (city) => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.log('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLong(coords.longitude);
      }, (error) => {
        console.log('Something went wrong getting your position!')
      })
    }
  useEffect(() => {
    getUserCoordinates();
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
