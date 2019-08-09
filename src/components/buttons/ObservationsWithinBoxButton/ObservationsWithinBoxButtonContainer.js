import React, { Component } from 'react';
import { connect } from 'react-redux';

import ObservationsWithinBoxButton from '../ObservationsWithinBoxButton';
import { openWithinBoxModal } from '../../../actions/ui/modal/withinbox'

class ObservationsWithinBoxButtonContainer extends Component{
    handleClick = () => {
        const { dispatch } = this.props;
        dispatch(openWithinBoxModal())
    };

    render(){
        return <ObservationsWithinBoxButton onClick={this.handleClick} />
    }
}

export default connect()(ObservationsWithinBoxButtonContainer)