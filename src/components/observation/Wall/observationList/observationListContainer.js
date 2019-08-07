import React, {Component} from 'react';
import {connect} from 'react-redux';
import ObservationList from './index';
import { getWheatObservations } from '../../../../selectors/observation/wheat';

class ObservationListContainer extends Component {
    render(){
        const {allObservations} = this.props;

        return <ObservationList observations={allObservations} />
    }
}

export default connect (state =>({
    allObservations: getWheatObservations(state)
}))(ObservationListContainer)
