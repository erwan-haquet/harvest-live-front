import React, {Component} from 'react';
import {connect} from 'react-redux';
import ObservationList from './index';
import { getWheatObservations } from '../../../../selectors/observation/wheat';

class ObservationsListContainer extends Component {
    render(){
        const {wheatObservations} = this.props;

        return <ObservationList observations={wheatObservations} />
    }
}

export default connect (state =>({
    wheatObservations: getWheatObservations(state)
}))(ObservationsListContainer)
