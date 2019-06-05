import { Record } from 'immutable';
import { LatLng } from './latLng';

export const Bounds = Record({
  northEast: new LatLng(),
  southWest: new LatLng(),
});

export default Bounds;
