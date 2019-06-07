import React from 'react';
import { Marker } from 'react-leaflet';

const ObservationMarker = ({ latLng, icon, onClick }) => {
  return <Marker opacity={0.6} position={[latLng.latitude, latLng.longitude]} icon={icon} onclick={onClick} />;
};

export default ObservationMarker;
