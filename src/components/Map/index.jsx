import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import styles from './styles.module.scss';
import ObservationsListContainer from '../../components/observation/ObservationsMarkers/ObservationsListContainer';
import MarkerClusterContainer from '../../components/observation/ObservationsClusterMarkers/MarkerClusterContainer';

const Map = ({ zoom, position, style, onPositionChanged, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <LeafletMap
        maxZoom={14}
        minZoom={8}
        center={position}
        zoom={zoom}
        onMoveEnd={onPositionChanged}
        onZommEnd={onPositionChanged}
        onClick={onClick}
        zoomControl={false}
      >
        <TileLayer url={style} />
        <ObservationsListContainer />
        <MarkerClusterContainer />
      </LeafletMap>
    </div>
  );
};

export default Map;
