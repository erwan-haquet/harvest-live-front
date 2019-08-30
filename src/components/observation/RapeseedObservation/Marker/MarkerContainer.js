import React, { Component } from 'react';

import L from 'leaflet';
import Marker from '../../../common/Marker';
import { selectObservationAction } from '../../../../actions/ui/modal/observation/details';
import { connect } from 'react-redux';
import { openObservationDetailsModalAction } from '../../../../actions/ui/modal/observation/details';
import markerRapeseed from '../../../../images/marker-rapeseed.png';

class MarkerContainer extends Component {
  handleClick = () => {
    const { dispatch, observation } = this.props;
    dispatch(selectObservationAction(observation));
    dispatch(openObservationDetailsModalAction());
  };

  render() {
    const { observation } = this.props;

    const icon = new L.Icon({
      iconUrl: markerRapeseed,
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