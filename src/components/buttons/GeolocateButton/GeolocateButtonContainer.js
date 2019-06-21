import React, { Component } from 'react';
import { connect } from 'react-redux';

import GeolocateButton from '../GeolocateButton';
import LatLng from '../../../models/latLng';
import { setAskedPositionAction } from '../../../actions/askedPosition';

const PERMISSION_GRANTED = 'granted';
const PERMISSION_DENIED = 'denied';

class GeolocateButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { permission: null };

    if (navigator.permissions) {
      navigator.permissions
          .query({ name: 'geolocation' })
          .then(this.handlePermissionChange);
    }
  }

  handlePermissionChange = permissionStatus => {
    if (permissionStatus.state === PERMISSION_GRANTED) {
      navigator.geolocation.getCurrentPosition(
        this.acceptGeolocation,
      );
    } else if (permissionStatus.state === PERMISSION_DENIED) {
      this.denyGeolocation();
    }
  };

  handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.acceptGeolocation,
        this.denyGeolocation,
      );
    }
  };

  acceptGeolocation = position => {
    this.setLocation(position);
    this.setState({
      permission: PERMISSION_GRANTED,
    });
  };

  denyGeolocation = () => {
    this.setState({
      permission: PERMISSION_DENIED,
    });
  };

  setLocation = position => {
    const { dispatch } = this.props;

    // A kick and dirty fix to enforce a new position every time user require to recenter map on same position
    const randomFloat = parseFloat(
        (Math.random() * (0.0002 - 0.0001) + 0.0001).toFixed(6),
    );

    const positionFound = new LatLng({
      latitude: position.coords.latitude + randomFloat,
      longitude: position.coords.longitude + randomFloat,
    });

    dispatch(setAskedPositionAction(positionFound));
  };

  render() {
    if (this.state.permission === PERMISSION_DENIED) {
      return null;
    }

    return <GeolocateButton onClick={this.handleClick} />;
  }
}

export default connect()(GeolocateButtonContainer);
