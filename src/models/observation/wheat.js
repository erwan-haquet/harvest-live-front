import { Record, fromJS } from 'immutable';
import LatLng from '../latLng';

export const WheatObservation = Record(
  {
    specificWeight: null,
    protein: null,
    fallingNumber: null,
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
    cultureName: 'Blé',
    image: null,
  },
  'WheatObservation',
);

export const toWheatObservation = observation =>
  new WheatObservation(
    fromJS({
      ...observation,
      coordinates: new LatLng({
        latitude: observation.coordinates.latitude,
        longitude: observation.coordinates.longitude,
      }),
    }),
  );

export default WheatObservation;
