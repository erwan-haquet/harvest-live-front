import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import BarleyObservation from '../../../models/barleyObservation';

const BarleyMarker = ({ observation }) => {
  return (
    <Marker
      position={[
        observation.coordinates.latitude,
        observation.coordinates.longitude,
      ]}
    >
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

BarleyMarker.defaultProps = {
  observation: new BarleyObservation(),
};

export default BarleyMarker;
