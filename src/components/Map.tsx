'use client'
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { tours } from '../data/tours';

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
      <MapContainer center={[0, 37]} zoom={6} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {tours.map((tour) => (
          <Marker key={tour.id} position={getCoordinates(tour.name)}>
            <Popup>{tour.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

const getCoordinates = (tourName: string): [number, number] => {  
  switch (tourName) {
    case 'Taita Hills':
      return [-3.4, 38.3];
    case 'Amboseli National Park':
      return [-2.6, 37.3];
    case 'Maasai Mara National Reserve':
      return [-1.5, 35.1];
    case 'Lake Nakuru':
      return [-0.3, 36.1];
    case 'Nairobi National Park':
      return [-1.3, 36.8];
    case 'Simba Hills':
      return [-4.2, 39.4];
    case 'Wasini Marine Park':
      return [-4.7, 39.4];
    default:
      return [0, 37]; // Default to center of Kenya
  }
};

export default Map;
