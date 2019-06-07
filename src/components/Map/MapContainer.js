import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../Map';
import { buildFromLeafletMap } from '../../models/location';
import { setLocationAction } from '../../actions/location';
import { getAskedPosition, isFetching } from '../../selectors/askedPosition';
import { closeObservationDetailsAction } from '../../actions/observationDetails';

const accessToken =
  'pk.eyJ1IjoiZXJ3YW5ubiIsImEiOiJjandqbnRvM2swNHg5NDhwanNyN3J5eHI0In0.wST16iOcVJ3HQsTv0FxtXg';

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
    const { askedPosition, zoom, style } = this.props;

    // A kick and dirty fix to enforce a new position every time user require to recenter map on same position
    const randomFloat = parseFloat(
      (Math.random() * (0.0002 - 0.0001) + 0.0001).toFixed(6),
    );

    const position =
      askedPosition.latitude || askedPosition.longitude
        ? [
            askedPosition.latitude + randomFloat,
            askedPosition.longitude + randomFloat,
          ]
        : [48.449715, 1.492092]; // Setup location to chartres by default

    return (
      <Map
        position={position}
        zoom={zoom}
        style={style}
        accessToken={accessToken}
        onClick={this.handleMapClick}
        onPositionChanged={this.handlePositionChanged}
      />
    );
  }
}

MapContainer.defaultProps = {
  zoom: 8,
  style: 'streets-v11',
};

export default connect(state => ({
  askedPosition: getAskedPosition(state),
  isFetching: isFetching(state),
}))(MapContainer);
