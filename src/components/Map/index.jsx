import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import styles from './styles.module.scss';
import BarleyMarkerListContainer from '../observation/BarleyObservation/MarkerList/MarkerListContainer';
import CornMarkerListContainer from '../observation/CornObservation/MarkerList/MarkerListContainer';
import RapeseedMarkerListContainer from '../observation/RapeseedObservation/MarkerList/MarkerListContainer';
import SunflowerMarkerListContainer from '../observation/SunflowerObservation/MarkerList/MarkerListContainer';
import WheatMarkerListContainer from '../observation/WheatObservation/MarkerList/MarkerListContainer';

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
        <BarleyMarkerListContainer />
        <CornMarkerListContainer />
        <RapeseedMarkerListContainer />
        <SunflowerMarkerListContainer />
        <WheatMarkerListContainer />
      </LeafletMap>
    </div>
  );
};

export default Map;
