import React, { Component } from 'react';
import LatLng from '../../../models/latLng';
import { connect } from 'react-redux';
import ObservationsClusterMarkers from '.';
import { List } from 'immutable';
import { getSelectedCulture } from '../../../selectors/ui/filters';

class MarkerClusterContainer extends Component {
  //function to get a circle from a coordinate and get all the coordinates on his border
  getPointsCoordinates = (coordinates = new LatLng(), observations) => {
    let nbPoints = observations.size;
    let radius = 0.005;
    let slice = (2 * Math.PI) / nbPoints;
    let coordinatesArray = [];

    for (let i = 0; i < nbPoints; i++) {
      let angle = slice * i;
      let newCirclePointsCoordinates = new LatLng({
        latitude: coordinates.latitude + radius * Math.cos(angle),
        longitude: coordinates.longitude + radius * Math.sin(angle)
      });
      coordinatesArray.push(newCirclePointsCoordinates);
    }
    return coordinatesArray;
  };

  //function to apply the new coordinates we obtain with getPointsCoordinates function to the actual coordinates
  applyMarkersNewCoordinates = (initialObservationsArray = new List()) => {
    if (initialObservationsArray.size === 0) {
      return new List();
    }

    const reassignedArray = initialObservationsArray.map((value, index) => {
      return value.set(
        'coordinates',
        new LatLng({
          latitude: this.getPointsCoordinates(
            initialObservationsArray.get(0).coordinates,
            initialObservationsArray
          )[index].latitude,
          longitude: this.getPointsCoordinates(
            initialObservationsArray.get(0).coordinates,
            initialObservationsArray
          )[index].longitude
        })
      );
    });

    return reassignedArray;
  };
  render() {
    const { observations, selectedCulture } = this.props;

    var reassignedListWithNewCoords = this.applyMarkersNewCoordinates(
      observations
    ).toArray();

    return (
      <ObservationsClusterMarkers
        observations={reassignedListWithNewCoords}
        selectedCulture={selectedCulture}
      />
    );
  }
}

MarkerClusterContainer.defaultProps = {
  observations: List()
};

export default connect(state => ({
  selectedCulture: getSelectedCulture(state)
}))(MarkerClusterContainer);
