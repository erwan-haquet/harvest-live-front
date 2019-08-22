import React from 'react';

import WheatMarkerContainer from '../WheatObservation/Marker/MarkerContainer';
import BarleyMarkerContainer from '../BarleyObservation/Marker/MarkerContainer';
import RapeseedMarkerContainer from '../RapeseedObservation/Marker/MarkerContainer';
import CornMarkerContainer from '../CornObservation/Marker/MarkerContainer';
import SunFlowerMarkerContainer from '../SunflowerObservation/Marker/MarkerContainer';

const Observation = ({ observation }) => {
  switch (observation.cultureName) {
    case 'Colza':
      return <RapeseedMarkerContainer observation={observation} />;
    case 'Blé':
      return <WheatMarkerContainer observation={observation} />;
    case 'Orge':
      return <BarleyMarkerContainer observation={observation} />;
    case 'Maïs':
      return <CornMarkerContainer observation={observation} />;
    case 'Tournesol':
      return <SunFlowerMarkerContainer observation={observation} />;
    default:
      return null;
  }
};

export default Observation;
