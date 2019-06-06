import React, { Component } from 'react';
import { connect } from 'react-redux';

import GeolocateButton from '../GeolocateButton';
import LatLng from '../../models/latLng';
import { setPositionAction } from '../../actions/location';
import { getLocation } from '../../selectors/location';

const PERMISSION_GRANTED = 'granted';
const PERMISSION_DENIED = 'denied';
const PERMISSION_PROMPT = 'prompt';

class GeolocateButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { permission: null };

    navigator.permissions
        .query({ name: 'geolocation' })
        .then(this.handlePermissionChange);
  }

  handlePermissionChange = permissionStatus => {
    if (this.state.permission === null || this.state.permission ===  PERMISSION_PROMPT) {
      this.setState({
        permission: permissionStatus.state,
      });
    }
  };

  handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.acceptGeolocation, this.denyGeolocation);
    } else {
      console.log('nope');
    }
  };

  acceptGeolocation = position => {
    this.setLocation(position);
    this.setState({
      permission:PERMISSION_GRANTED,
    });
  };

  denyGeolocation = () => {
    this.setState({
      permission:PERMISSION_DENIED,
    });
  };

  setLocation = position => {
    const { dispatch } = this.props;

    const positionFound = new LatLng({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

    dispatch(setPositionAction(positionFound));
  };

  render() {
    if (this.state.permission === PERMISSION_DENIED) {
      return null;
    }

    return <GeolocateButton onClick={this.handleClick} />;
  }
}

export default connect(state => ({
  location: getLocation(state),
}))(GeolocateButtonContainer);
