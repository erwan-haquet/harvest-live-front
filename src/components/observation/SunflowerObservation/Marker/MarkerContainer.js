import React, { Component } from 'react';

import L from 'leaflet';
import Marker from '../../../common/Marker';
import { setSelectedObservation } from '../../../../actions/selectedObservation';
import { connect } from 'react-redux';
import { openObservationDetailsAction } from '../../../../actions/observationDetails';
import markerSunflower from '../../../../images/marker-sunflower.png';

class MarkerContainer extends Component {
  handleClick = () => {
    const { dispatch, observation } = this.props;
    dispatch(setSelectedObservation(observation));
    dispatch(openObservationDetailsAction());
  };

  render() {
    const { observation } = this.props;

    const icon = new L.Icon({
      iconUrl: markerSunflower,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });


    return (
      <Marker
        onClick={this.handleClick}
        latLng={observation.coordinates}
        icon={icon}
      />
    );
  }
}

export default connect()(MarkerContainer);
