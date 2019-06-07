import React from 'react';
import { Marker } from 'react-leaflet';

const ObservationMarker = ({ latLng, icon, onClick }) => {
  return <Marker position={[latLng.latitude, latLng.longitude]} icon={icon} onclick={onClick} />;
};

export default ObservationMarker;
