import React, { Component } from 'react';

import L from 'leaflet';
import ObservationMarker from '../../../../common/ObservationMarker';
import { setSelectedObservation } from '../../../../../actions/selectedObservation';
import { connect } from 'react-redux';
import { openObservationDetailsAction } from '../../../../../actions/observationDetails';

class MarkerContainer extends Component {
  handleClick = () => {
    const { dispatch, observation } = this.props;
    dispatch(setSelectedObservation(observation));
    dispatch(openObservationDetailsAction());
  };

  render() {
    const { observation } = this.props;

    const icon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: new L.Point(25, 41),
      iconAnchor: new L.Point(12, 41),
      popupAnchor: new L.Point(1, -34),
      shadowSize: new L.Point(41, 41),
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
