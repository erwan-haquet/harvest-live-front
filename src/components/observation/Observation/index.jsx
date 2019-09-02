import React from 'react';
import markerRapeseed from '../../../images/marker-rapeseed.png';
import markerSunflower from '../../../images/marker-sunflower.png';
import markerWheat from '../../../images/marker-wheat.png';
import markerBarley from '../../../images/marker-barley.png';
import markerCorn from '../../../images/marker-corn.png';
import Marker from '../../common/Marker';
import L from 'leaflet';

const Observation = ({ observation, onClick }) => {

  let updatedIconUrl = null;

  switch (observation.cultureName) {
    case 'Colza':
      updatedIconUrl = markerRapeseed;
      break;
    case 'Blé':
      updatedIconUrl = markerWheat;
      break;
    case 'Orge':
      updatedIconUrl = markerBarley;
      break;
    case 'Maïs':
      updatedIconUrl = markerCorn;
      break;
    case 'Tournesol':
      updatedIconUrl = markerSunflower;
      break;
    default:
      return null;
  }

  const icon = new L.Icon({
    iconUrl: updatedIconUrl,
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  
  return <Marker icon={icon} onClick={onClick} latLng={observation.coordinates}  />;
};

export default Observation;
