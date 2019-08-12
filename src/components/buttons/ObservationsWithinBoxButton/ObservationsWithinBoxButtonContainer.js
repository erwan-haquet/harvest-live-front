import React, { Component } from 'react';
import { connect } from 'react-redux';

import ObservationsWithinBoxButton from '../ObservationsWithinBoxButton';
import { openModal } from '../../../actions/ui/modal/observationsWithinBox'

class ObservationsWithinBoxButtonContainer extends Component {
    handleClick = () => {
        const { dispatch } = this.props;
        dispatch(openModal())
    };

    render() {
        return <ObservationsWithinBoxButton onClick = { this.handleClick }
        />
    }
}

export default connect()(ObservationsWithinBoxButtonContainer)