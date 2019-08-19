import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWheatObservations } from '../../../selectors/observation/wheat';
import { getCornObservations } from '../../../selectors/observation/corn';
import { getBarleyObservations } from '../../../selectors/observation/barley';
import { getSunflowerObservations } from '../../../selectors/observation/sunflower';
import { getRapeseedObservations } from '../../../selectors/observation/rapeseed';
import WheatMarkerContainer from '../WheatObservation/Marker/MarkerContainer';
import BarleyMarkerContainer from '../BarleyObservation/Marker/MarkerContainer';
import RapeseedMarkerContainer from '../RapeseedObservation/Marker/MarkerContainer';
import CornMarkerContainer from '../CornObservation/Marker/MarkerContainer';
import SunFlowerMarkerContainer from '../SunflowerObservation/Marker/MarkerContainer';
import { List } from 'immutable';
import immutable from 'immutable/dist/immutable';

class ObservationsListContainer extends Component {
  render() {
    const {
      wheatObservations,
      barleyObservations,
      cornObservations,
      rapeseedObservations,
      sunflowerObservations
    } = this.props;

    const allCulturesObservations = immutable.fromJS(
      new List().concat(
        wheatObservations,
        barleyObservations,
        cornObservations,
        rapeseedObservations,
        sunflowerObservations
      )
    );

    //Using Group by function from immutable to sort observations array by coordinates
    var culturesOrderedByCoordinates = immutable
      .fromJS(allCulturesObservations)
      .groupBy(item => item.coordinates);

    console.log(culturesOrderedByCoordinates);

    const mappedCultures = culturesOrderedByCoordinates.map(i => {
      if (i.size === 1) {
        for (let j = 0; j < i.size; j++) {
          switch (i.get(j).cultureName) {
            case 'Blé':
              return <WheatMarkerContainer observation={i.get(j)} />;
            case 'Orge':
              return <BarleyMarkerContainer observation={i.get(j)} />;
            case 'Colza':
              return <RapeseedMarkerContainer observation={i.get(j)} />;
            case 'Maïs':
              return <CornMarkerContainer observation={i.get(j)} />;
            case 'Tournesol':
                return <SunFlowerMarkerContainer observation={i.get(j)} />
            default:
                return null;
          }
        }
      }
    });

    return mappedCultures;
  }
}

export default connect(state => ({
  wheatObservations: getWheatObservations(state),
  cornObservations: getCornObservations(state),
  barleyObservations: getBarleyObservations(state),
  sunflowerObservations: getSunflowerObservations(state),
  rapeseedObservations: getRapeseedObservations(state)
}))(ObservationsListContainer);
