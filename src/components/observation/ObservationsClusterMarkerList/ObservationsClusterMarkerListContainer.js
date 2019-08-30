import React, { Component } from 'react';
import LatLng from '../../../models/latLng';
import ObservationsClusterMarkerList from '.';
import { List } from 'immutable';

class ObservationsClusterMarkerListContainer extends Component {
  placeOnCircle = ({ observation, numberOfSlices, slicePosition, center }) => {
    if (numberOfSlices <= 1) {
      return observation;
    }

    const radius = 0.005;
    const step = (2 * Math.PI) / numberOfSlices;
    const angle = step * slicePosition;

    return observation.set(
      'coordinates',
      new LatLng({
        latitude: center.latitude + radius * Math.cos(angle),
        longitude: center.longitude + radius * Math.sin(angle)
      })
    );
  };

  render() {
    const { observations, coordinates } = this.props;

    const numberOfSlices = observations.size;
    const spreadOutObservations = observations.map((observation, index) => {
      return this.placeOnCircle({
        observation,
        numberOfSlices,
        slicePosition: index,
        center: coordinates
      });
    });

    return <ObservationsClusterMarkerList observations={spreadOutObservations} />;
  }
}

ObservationsClusterMarkerListContainer.defaultProps = {
  observations: List()
};

export default ObservationsClusterMarkerListContainer;
