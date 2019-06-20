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

export const buildDefault = () => {
  return new Location({
    position: new LatLng({
      latitude: 48.45106561953216,
      longitude: 1.50360210537829,
    }),
    bounds: new Bounds({
      northEast: new LatLng({
        latitude: 50.33494273843299,
        longitude: 7.158814507722042,
      }),
      southWest: new LatLng({
        latitude: 46.494610770689384,
        longitude: -4.151610296965461,
      }),
    }),
  });
};

export default Location;
