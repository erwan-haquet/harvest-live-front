import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import styles from './styles.module.scss';

const Map = ({ zoom, position, style, accessToken, onMoveEnd, onLoad }) => {
  return (
    <div className={styles.wrapper}>
      <LeafletMap center={position} zoom={zoom} onMoveEnd={onMoveEnd} >
        <TileLayer
          onLoad={onLoad}
          url={`https://api.mapbox.com/styles/v1/mapbox/${style}/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`}
        />
      </LeafletMap>
    </div>
  );
};

export default Map;
