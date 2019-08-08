import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObservationsAroundWindowModal from './index';
import { closeAroundModal } from '../../../actions/ui/modal/around';
import { isOpen } from '../../../selectors/ui/modal/around'

class ObservationsAroundWindowModalContainer extends Component {
    handleClose = () => {
        const { dispatch } = this.props;
        dispatch(closeAroundModal());
    };

    render() {
        const { isOpen } = this.props;
        if (!isOpen) {
            return null;
        }

        return (
            <ObservationsAroundWindowModal
                onClose={this.handleClose}
            />
        )
    }
}

export default connect(state => ({
    isOpen: isOpen(state)
}))(ObservationsAroundWindowModalContainer)