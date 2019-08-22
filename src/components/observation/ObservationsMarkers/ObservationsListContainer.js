import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWheatObservations } from '../../../selectors/observation/wheat';
import { getCornObservations } from '../../../selectors/observation/corn';
import { getBarleyObservations } from '../../../selectors/observation/barley';
import { getSunflowerObservations } from '../../../selectors/observation/sunflower';
import { getRapeseedObservations } from '../../../selectors/observation/rapeseed';
import { List } from 'immutable';
import immutable from 'immutable/dist/immutable';
import MarkerClusterContainer from '../ObservationsClusterMarkers/MarkerClusterContainer';
import Observation from '../Observation';
import { getSelectedCulture } from '../../../selectors/ui/filters';

class ObservationsListContainer extends Component {
  render() {
    const {
      wheatObservations,
      barleyObservations,
      cornObservations,
      rapeseedObservations,
      sunflowerObservations,
      selectedCulture
    } = this.props;

    const allCulturesObservations = (selectedCulture) => {
      switch(selectedCulture){
        case 'barley':
          return barleyObservations
        case 'wheat':
          return wheatObservations
        case 'corn':
          return cornObservations
        case 'rapeseed':
          return rapeseedObservations
        case 'sunflower':
          return sunflowerObservations
        default:
          return wheatObservations.concat(barleyObservations,cornObservations,rapeseedObservations,sunflowerObservations)
      }
    }

    //Using Group by function from immutable to sort observations array by coordinates
    var culturesOrderedByCoordinates = immutable
      .fromJS(allCulturesObservations(selectedCulture))
      .groupBy(item => item.coordinates);

    const mappedCultures = culturesOrderedByCoordinates.map(cluster => {
      if (cluster.isEmpty()) {
        return null;
      }

      if (cluster.size === 1) {
        return <Observation observation={cluster.first()} selectedCulture={selectedCulture} />;
      }

      return <MarkerClusterContainer observations={cluster} selectedCulture={selectedCulture} />;
    });

    return mappedCultures;
  }
}

export default connect(state => ({
  selectedCulture: getSelectedCulture(state),
  wheatObservations: getWheatObservations(state),
  cornObservations: getCornObservations(state),
  barleyObservations: getBarleyObservations(state),
  sunflowerObservations: getSunflowerObservations(state),
  rapeseedObservations: getRapeseedObservations(state)
}))(ObservationsListContainer);
