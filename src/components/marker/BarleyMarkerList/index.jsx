import React from 'react';

import BarleyMarker from '../BarleyMarker';

const BarleyMarkerList = ({ barleyObservations }) =>
  barleyObservations.map((observation, key) => (
    <BarleyMarker key={key} observation={observation} />
  ));

export default BarleyMarkerList;
