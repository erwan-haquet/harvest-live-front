import React, { Component } from 'react';
import { connect } from 'react-redux';

import GeolocateButton from '../GeolocateButton';
import { locationFromGeolocationRequestAction } from '../../../actions/location';

class GeolocateButtonContainer extends Component {
  render() {
    const { dispatch } = this.props;

    dispatch(locationFromGeolocationRequestAction());

    return <GeolocateButton />;
  }
}

export default connect()(GeolocateButtonContainer);
