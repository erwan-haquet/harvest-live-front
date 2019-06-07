import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../Map';
import { buildFromLeafletMap } from '../../models/location';
import { setLocationAction } from '../../actions/location';
import { getAskedPosition, isFetching } from '../../selectors/askedPosition';
import { closeObservationDetailsAction } from '../../actions/observationDetails';
import { getMapStyle } from '../../selectors/mapStyle';

const accessToken =
  'pk.eyJ1IjoiZXJ3YW5ubiIsImEiOiJjandsejQyNzYxOGpwNGNuNjZlbGZuMTF2In0.jDRqr2VDjGDB7_hpppdunQ';

class MapContainer extends Component {
  handlePositionChanged = event => {
    const { dispatch } = this.props;
    const location = buildFromLeafletMap(event.target);
    dispatch(setLocationAction(location));
  };

  handleMapClick = () => {
    const { dispatch } = this.props;
    dispatch(closeObservationDetailsAction());
  };

  render() {
    const { askedPosition, zoom, mapStyle } = this.props;

    const position =
      askedPosition.latitude || askedPosition.longitude
        ? [askedPosition.latitude, askedPosition.longitude]
        : [48.449715, 1.492092]; // Setup location to chartres by default

    return (
      <Map
        position={position}
        zoom={zoom}
        style={mapStyle}
        accessToken={accessToken}
        onClick={this.handleMapClick}
        onPositionChanged={this.handlePositionChanged}
      />
    );
  }
}

MapContainer.defaultProps = {
  zoom: 8,
};

export default connect(state => ({
  askedPosition: getAskedPosition(state),
  isFetching: isFetching(state),
  mapStyle: getMapStyle(state),
}))(MapContainer);
