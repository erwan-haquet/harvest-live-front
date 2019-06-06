import React, { Component } from 'react';

import L from "leaflet";
import ObservationMarker from "../../common/ObservationMarker";

class MarkerContainer extends Component {

  render() {
    const { observation } = this.props;

    const icon = new L.Icon({
      iconUrl: require('../../../images/marker-red.png'),
      iconSize: new L.Point(25, 25),
    });

    return <ObservationMarker latLng={observation.coordinates} icon={icon}/>;
  }
}

export default MarkerContainer;
