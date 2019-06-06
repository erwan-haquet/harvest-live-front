import React, { Component } from 'react';

import L from 'leaflet';
import ObservationMarker from '../../common/ObservationMarker';
import { setSelectedObservation } from '../../../actions/selectedObservation';
import {connect} from "react-redux";
import {openObservationDetailsAction} from "../../../actions/observationDetails";

class MarkerContainer extends Component {
  handleClick = () => {
    const { dispatch, observation } = this.props;
    dispatch(setSelectedObservation(observation));
    dispatch(openObservationDetailsAction());
  };
  render() {
    const { observation } = this.props;

    const icon = new L.Icon({
      iconUrl: require('../../../images/marker-blue.svg'),
      iconSize: new L.Point(50, 50),
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
