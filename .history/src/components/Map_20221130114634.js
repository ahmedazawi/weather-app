import { googleMapAPI } from "../assets/data/Api";

const Map = () => {
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
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&lat=33.3&lon=44.3`}
      ></iframe>
    </div>
  );
};
export default Map;
