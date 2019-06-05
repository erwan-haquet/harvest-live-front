import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../Map';
import Location, { buildFromLeafletMap } from '../../models/location';
import { setLocationAction } from '../../actions/location';
import LatLng from '../../models/latLng';

const accessToken =
  'pk.eyJ1IjoiZXJ3YW5ubiIsImEiOiJjandqbnRvM2swNHg5NDhwanNyN3J5eHI0In0.wST16iOcVJ3HQsTv0FxtXg';

class MapContainer extends Component {
  handleMoveEnd = event => {
    const { dispatch } = this.props;
    const location = buildFromLeafletMap(event.target);
    dispatch(setLocationAction(location));
  };

  handleLoad = event => {
    const { dispatch } = this.props;
    const location = buildFromLeafletMap(event.target._map);
    console.log(location);
    dispatch(setLocationAction(location));
  };

  render() {
    const { location, zoom, style } = this.props;
    const position = [location.position.latitude, location.position.longitude];

    return (
      <Map
        position={position}
        zoom={zoom}
        style={style}
        accessToken={accessToken}
        onMoveEnd={this.handleMoveEnd}
        onLoad={this.handleLoad}
      />
    );
  }
}

MapContainer.defaultProps = {
  location: new Location({
    position: new LatLng({ latitude: 48.449715, longitude: 1.492092 }),
  }),
  zoom: 10,
  style: 'streets-v11',
};

export default connect()(MapContainer);
