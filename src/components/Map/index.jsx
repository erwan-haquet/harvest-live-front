import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import styles from './styles.module.scss';
import BarleyMarkerListContainer from '../marker/BarleyMarkerList/BarleyMarkerListContainer';

const Map = ({ zoom, position, style, accessToken, onPositionChanged }) => {
  return (
    <div className={styles.wrapper}>
      <LeafletMap
        center={position}
        zoom={zoom}
        onMoveEnd={onPositionChanged}
        onZommEnd={onPositionChanged}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${style}/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`}
        />
        <BarleyMarkerListContainer />
      </LeafletMap>
    </div>
  );
};

export default Map;
