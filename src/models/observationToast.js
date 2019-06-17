import { Record } from 'immutable';
import LatLng from './latLng';

export const ObservationToast = Record(
  {
    message: null,
    coordinates: new LatLng(),
  },
  'ObservationToast',
);

export default ObservationToast;
