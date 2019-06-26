import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet';

const Marker = ({ latLng, icon, onClick }) => {
  return (
    <LeafletMarker
      position={[latLng.latitude, latLng.longitude]}
      icon={icon}
      onclick={onClick}
    />
  );
};

export default Marker;
