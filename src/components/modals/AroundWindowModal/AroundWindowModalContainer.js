import React, { Component } from 'react';
import { connect } from 'react-redux';
import AroundWindowModal from './index';
import { closeAroundModal } from '../../../actions/ui/modal/around';
import { isAroundModalOpen } from '../../../selectors/ui/modal/around'

class AroundWindowModalContainer extends Component {
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
            <AroundWindowModal
                onClose={this.handleClose}
            />
        )
    }
}

export default connect(state => ({
    isOpen: isAroundModalOpen(state)
}))(AroundWindowModalContainer)