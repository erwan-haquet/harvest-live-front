import { Record, fromJS } from 'immutable';
import LatLng from './latLng';

export const RapeseedObservation = Record(
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
    cultureName: 'Colza',
    image: null,
  },
  'RapeseedObservation',
);

export const toRapeseedObservation = observation =>
  new RapeseedObservation(
    fromJS({
      ...observation,
      coordinates: new LatLng({
        latitude: observation.coordinates.latitude,
        longitude: observation.coordinates.longitude,
      }),
    }),
  );

export default RapeseedObservation;
