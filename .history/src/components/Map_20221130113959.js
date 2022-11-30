import { googleMapAPI } from "../assets/data/Api";

const Map = () => {
  return (
    <div>
      <iframe
        className="map"
        title="map"
        width="100%"
        height="300"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=baghdad`}
      ></iframe>
    </div>
  );
};
export default Map;
