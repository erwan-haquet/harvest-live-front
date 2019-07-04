import React from 'react';

import MarkerContainer from '../Marker/MarkerContainer';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { createClusterCustomIcon } from '../../../common/MarkerCluster';
import { cultures } from '../../../../constants/observationCultures';

const MarkerList = ({ observations }) => (
  <MarkerClusterGroup
    showCoverageOnHover={false}
    iconCreateFunction={cluster =>
      createClusterCustomIcon({ cluster, observationType: cultures.WHEAT })
    }
  >
    {observations.map((observation, key) => (
      <MarkerContainer key={key} observation={observation} />
    ))}
  </MarkerClusterGroup>
);

export default MarkerList;
