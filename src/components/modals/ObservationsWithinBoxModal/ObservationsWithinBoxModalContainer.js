import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObservationsWithinBoxModal from './index';
import { closeModal } from '../../../actions/ui/modal/observationsWithinBox';
import { isOpen } from '../../../selectors/ui/modal/observationsWithinBox'

class ObservationsWithinBoxModalContainer extends Component {
    handleClose = () => {
        const { dispatch } = this.props;
        dispatch(closeModal());
    };

    render() {
        const { isOpen } = this.props;
        if (!isOpen) {
            return null;
        }

        return ( <
            ObservationsWithinBoxModal onClose = { this.handleClose }
            />
        )
    }
}

export default connect(state => ({
    isOpen: isOpen(state)
}))(ObservationsWithinBoxModalContainer)