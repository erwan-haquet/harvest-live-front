import React from 'react';
import Observation from '../Observation/index';

const ObservationsClusterMarkers = ({ observations }) =>
  observations.map(observation => (
    <Observation key={observation.id} observation={observation}  />
  ));
export default ObservationsClusterMarkers;
