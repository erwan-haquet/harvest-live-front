import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../Map';
import { buildFromLeafletMap } from '../../models/location';
import { setLocationAction } from '../../actions/location';
import { getLocation } from '../../selectors/location';

const accessToken =
  'pk.eyJ1IjoiZXJ3YW5ubiIsImEiOiJjandqbnRvM2swNHg5NDhwanNyN3J5eHI0In0.wST16iOcVJ3HQsTv0FxtXg';

class MapContainer extends Component {
  handleLoad = event => {
    const { dispatch } = this.props;
    const location = buildFromLeafletMap(event.target._map);
    dispatch(setLocationAction(location));
  };

  render() {
    const { location, zoom, style } = this.props;

    const position =
      location.position.latitude || location.position.longitude
        ? [location.position.latitude, location.position.longitude]
        : [48.449715, 1.492092]; // Setup location to chartres by default

    return (
      <Map
        position={position}
        zoom={zoom}
        style={style}
        accessToken={accessToken}
        onLoad={this.handleLoad}
      />
    );
  }
}

MapContainer.defaultProps = {
  zoom: 10,
  style: 'streets-v11',
};

export default connect(state => ({
  location: getLocation(state),
}))(MapContainer);
