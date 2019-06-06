import React from 'react';
import { Marker } from 'react-leaflet';

const ObservationMarker = ({ latLng, icon }) => {
  return <Marker position={[latLng.latitude, latLng.longitude]} icon={icon} />;
};

export default ObservationMarker;
