import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObservationList from './index';
import { getWheatObservations } from '../../../../selectors/observation/wheat';
import { getBarleyObservations } from '../../../../selectors/observation/barley';
import { getCornObservations } from '../../../../selectors/observation/corn';
import { getRapeseedObservations } from '../../../../selectors/observation/rapeseed';
import { getSunflowerObservations } from '../../../../selectors/observation/sunflower';


class ObservationsListContainer extends Component {
    render() {
        const { wheatObservations, barleyObservations, cornObservations, rapeseedObservations, sunflowerObservations } = this.props;

        const allCulturesObservations = wheatObservations.concat(
            barleyObservations,
            cornObservations,
            rapeseedObservations,
            sunflowerObservations
        );

        //Sorted observations by createdAt date ASC
        const sortedObservationsDates = allCulturesObservations.sort(
            (observationA, observationB) => {
                return (observationA.createdAt > observationB.createdAt) ? -1 : ((observationA.createdAt < observationB.createdAt) ? 1 : 0);
            }
        )

        return <ObservationList observations = { sortedObservationsDates }
        />
    }
}

export default connect(state => ({
    wheatObservations: getWheatObservations(state),
    barleyObservations: getBarleyObservations(state),
    cornObservations: getCornObservations(state),
    rapeseedObservations: getRapeseedObservations(state),
    sunflowerObservations: getSunflowerObservations(state)
}))(ObservationsListContainer)