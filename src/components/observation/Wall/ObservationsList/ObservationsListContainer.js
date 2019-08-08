import React, {Component} from 'react';
import {connect} from 'react-redux';
import ObservationList from './index';
import { getWheatObservations } from '../../../../selectors/observation/wheat';
import { getBarleyObservations } from '../../../../selectors/observation/barley';
import { getCornObservations } from '../../../../selectors/observation/corn';
import { getRapeseedObservations } from '../../../../selectors/observation/rapeseed';
import { getSunflowerObservations } from '../../../../selectors/observation/sunflower';


class ObservationsListContainer extends Component {
    render(){
        const {wheatObservations, barleyObservations, cornObservations, rapeseedObservations, sunflowerObservations  } = this.props;

        const allCulturesObservations = wheatObservations.concat(barleyObservations, cornObservations, rapeseedObservations, sunflowerObservations);

        return <ObservationList observations={allCulturesObservations} />
    }
}

export default connect (state =>({
    wheatObservations: getWheatObservations(state),
    barleyObservations : getBarleyObservations(state),
    cornObservations : getCornObservations(state),
    rapeseedObservations : getRapeseedObservations(state),
    sunflowerObservations : getSunflowerObservations(state)
}))(ObservationsListContainer)
