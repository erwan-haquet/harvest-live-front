import { Record, fromJS } from 'immutable';
import LatLng from './latLng';

export const CornObservation = Record(
  {
    email: null,
    phone: null,
    variety: null,
    yield: null,
    humidity: null,
    yieldNotation: null,
    nitrogenQuantityUsed: null,
    nitrogenProductUsed: null,
    comment: null,
    cultivationMethod: null,
    targetPrice: null,
    place: null,
    coordinates: new LatLng(),
    id: null,
    createdAt: null,
    cultureName: 'Maïs',
    image: null,
  },
  'CornObservation',
);

export const toCornObservation = observation =>
  new CornObservation(
    fromJS({
      ...observation,
      coordinates: new LatLng({
        latitude: observation.coordinates.latitude,
        longitude: observation.coordinates.longitude,
      }),
    }),
  );

export default CornObservation;
