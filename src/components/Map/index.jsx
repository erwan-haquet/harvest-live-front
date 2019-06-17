import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import styles from './styles.module.scss';
import BarleyMarkerListContainer from '../observations/markers/BarleyObservation/MarkerList/MarkerListContainer';
import CornMarkerListContainer from '../observations/markers/CornObservation/MarkerList/MarkerListContainer';
import RapeseedMarkerListContainer from '../observations/markers/RapeseedObservation/MarkerList/MarkerListContainer';
import SunflowerMarkerListContainer from '../observations/markers/SunflowerObservation/MarkerList/MarkerListContainer';
import WheatMarkerListContainer from '../observations/markers/WheatObservation/MarkerList/MarkerListContainer';

const Map = ({ zoom, position, style, onPositionChanged, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <LeafletMap
        maxZoom={14}
        minZoom={4}
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
