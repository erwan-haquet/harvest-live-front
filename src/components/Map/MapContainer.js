import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../Map';
import { buildDefault, buildFromLeafletMap } from '../../models/location';
import { setLocationAction } from '../../actions/location';
import { getAskedPosition } from '../../selectors/askedPosition';
import { closeObservationDetailsModalAction } from '../../actions/ui/modal/observation/details';
import { getStyle } from '../../selectors/ui/map';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    // A quick fix to load location at initialization
    const defaultLocation = buildDefault();
    props.dispatch(setLocationAction(defaultLocation));
  }

  handlePositionChanged = event => {
    const { dispatch } = this.props;
    const location = buildFromLeafletMap(event.target);
    dispatch(setLocationAction(location));
  };

  handleMapClick = () => {
    const { dispatch } = this.props;
    dispatch(closeObservationDetailsModalAction());
  };

  render() {
    const { askedPosition, zoom, style } = this.props;

    const position =
      askedPosition.latitude || askedPosition.longitude
        ? [askedPosition.latitude, askedPosition.longitude]
        : [48.449715, 1.492092]; // Default location is set to "Chartres"

    return (
      <Map
        position={position}
        zoom={zoom}
        style={style}
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
  style: getStyle(state),
}))(MapContainer);
