import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import L from "leaflet";

const Map = () => {
  const { flights } = useSelector((store) => store.flight);

  return (
    <MapContainer
      center={[45.351374, 9.096329]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => {
        const icon = L.divIcon({
          html: `
        <div>
          <img src="/flight.png" style="width:20px; height:20px;" />
        </div>`,
          className: "",
          iconSize: [20, 20],
        });

        return (
          <Marker
            key={flight.id}
            position={[flight.lat, flight.lng]}
            icon={icon}
          >
            <Popup>
              <div className="popup">
                <span>Kod:{flight.code}</span>
                <button>Detail</button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
