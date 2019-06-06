import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import styles from './styles.module.scss';
import BarleyMarkerListContainer from '../BarleyObservation/MarkerList/MarkerListContainer';
import CornMarkerListContainer from '../CornObservation/MarkerList/MarkerListContainer';
import RapeseedMarkerListContainer from '../RapeseedObservation/MarkerList/MarkerListContainer';
import SunflowerMarkerListContainer from '../SunflowerObservation/MarkerList/MarkerListContainer';
import WheatMarkerListContainer from '../WheatObservation/MarkerList/MarkerListContainer';

const Map = ({ zoom, position, style, accessToken, onPositionChanged }) => {
  return (
    <div className={styles.wrapper}>
      <LeafletMap
        maxZoom={14}
        minZoom={5}
        center={position}
        zoom={zoom}
        onMoveEnd={onPositionChanged}
        onZommEnd={onPositionChanged}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${style}/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`}
        />
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
