import React from 'react';
import Observation from '../Observation/index';

const ObservationsClusterMarkers = ({ observations, selectedCulture }) =>
  observations.map(observation => (
    <Observation key={observation.id} observation={observation} selectedCulture={selectedCulture} />
  ));
export default ObservationsClusterMarkers;
