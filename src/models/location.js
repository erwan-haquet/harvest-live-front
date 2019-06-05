import { Record } from 'immutable';
import { LatLng } from './latLng';
import { Bounds } from './bounds';

export const Location = Record({
  position: new LatLng(),
  bounds: new Bounds(),
});

export const buildFromLeafletMap = map => {
  const bounds = map.getBounds();
  const center = map.getCenter();

  return new Location({
    position: new LatLng({ latitude: center.lat, longitude: center.lng }),
    bounds: new Bounds({
      northEast: new LatLng({
        latitude: bounds.getNorthEast().lat,
        longitude: bounds.getNorthEast().lng,
      }),
      southWest: new LatLng({
        latitude: bounds.getSouthWest().lat,
        longitude: bounds.getSouthWest().lng,
      }),
    }),
  });
};

export default Location;
