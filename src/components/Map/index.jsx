import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import styles from './styles.module.scss';
import BarleyMarkerListContainer from '../observation/BarleyObservation/MarkerList/MarkerListContainer';
import CornMarkerListContainer from '../observation/CornObservation/MarkerList/MarkerListContainer';
import RapeseedMarkerListContainer from '../observation/RapeseedObservation/MarkerList/MarkerListContainer';
import SunflowerMarkerListContainer from '../observation/SunflowerObservation/MarkerList/MarkerListContainer';
import WheatMarkerListContainer from '../observation/WheatObservation/MarkerList/MarkerListContainer';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { createClusterCustomIcon } from '../common/MarkerCluster';

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
        <MarkerClusterGroup
          showCoverageOnHover={false}
          iconCreateFunction={createClusterCustomIcon}
        >
          <BarleyMarkerListContainer />
          <CornMarkerListContainer />
          <RapeseedMarkerListContainer />
          <SunflowerMarkerListContainer />
          <WheatMarkerListContainer />
        </MarkerClusterGroup>
      </LeafletMap>
    </div>
  );
};

export default Map;
