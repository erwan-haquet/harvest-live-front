import React, { Component } from 'react';

import L from 'leaflet';
import ObservationMarker from '../../../../common/ObservationMarker';
import { setSelectedObservation } from '../../../../../actions/selectedObservation';
import { connect } from 'react-redux';
import { openObservationDetailsAction } from '../../../../../actions/observationDetails';
import markerCorn from '../../../../../images/marker-corn.svg';

class MarkerContainer extends Component {
  handleClick = () => {
    const { dispatch, observation } = this.props;
    dispatch(setSelectedObservation(observation));
    dispatch(openObservationDetailsAction());
  };
  render() {
    const { observation } = this.props;

    const icon = new L.Icon({
      iconUrl: markerCorn,
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: new L.Point(40, 40),
      iconAnchor: new L.Point(12, 40),
      popupAnchor: new L.Point(1, -34),
      shadowSize: new L.Point(40, 40),
      shadowAnchor: new L.Point(5, 40)
    });

    return (
      <ObservationMarker
        onClick={this.handleClick}
        latLng={observation.coordinates}
        icon={icon}
      />
    );
  }
}

export default connect()(MarkerContainer);
