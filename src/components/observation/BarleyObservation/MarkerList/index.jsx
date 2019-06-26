import React from 'react';

import MarkerContainer from '../Marker/MarkerContainer';

const MarkerList = ({ observations }) =>
  observations.map((observation, key) => (
    <MarkerContainer key={key} observation={observation} />
  ));

export default MarkerList;
