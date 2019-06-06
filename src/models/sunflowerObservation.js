import { Record, fromJS } from 'immutable';
import LatLng from './latLng';

export const SunflowerObservation = Record({
  specificWeight: null,
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
});

export const toSunflowerObservation = observation =>
  new SunflowerObservation(
    fromJS({
      ...observation,
      coordinates: new LatLng({
        latitude: observation.coordinates.latitude,
        longitude: observation.coordinates.longitude,
      }),
    }),
  );

export default SunflowerObservation;
