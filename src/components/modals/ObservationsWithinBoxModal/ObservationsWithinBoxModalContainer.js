import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObservationsWithinBoxModal from './index';
import { closeWithinBoxModal } from '../../../actions/ui/modal/withinbox';
import { isOpen } from '../../../selectors/ui/modal/withinbox'

class ObservationsWithinBoxModalContainer extends Component {
    handleClose = () => {
        const { dispatch } = this.props;
        dispatch(closeWithinBoxModal());
    };

    render() {
        const { isOpen } = this.props;
        if (!isOpen) {
            return null;
        }

        return (
            <ObservationsWithinBoxModal
                onClose={this.handleClose}
            />
        )
    }
}

export default connect(state => ({
    isOpen: isOpen(state)
}))(ObservationsWithinBoxModalContainer)