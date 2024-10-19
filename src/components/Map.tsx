'use client'
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const tourDestinations = [
  { name: "Machu Picchu", coordinates: [-13.1631, -72.5450] },
  { name: "Sahara Desert", coordinates: [23.4162, 25.6628] },
  { name: "Northern Lights, Iceland", coordinates: [64.9631, -19.0208] },
];

const Map = () => {
  interface ExtendedIconDefault extends L.Icon.Default {
    _getIconUrl?: () => string;
  }
  useEffect(() => {
    delete (L.Icon.Default.prototype as ExtendedIconDefault)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x.src,
      iconUrl: markerIcon.src,
      shadowUrl: markerShadow.src,
    });
  }, []);

  return (
    <div className="h-96 rounded-lg overflow-hidden">
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {tourDestinations.map((destination) => (
          <Marker key={destination.name} position={[destination.coordinates[0], destination.coordinates[1]]}>
            <Popup>{destination.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
