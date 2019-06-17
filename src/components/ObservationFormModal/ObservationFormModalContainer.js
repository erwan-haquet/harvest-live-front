import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObservationFormModal from './index';
import { isObservationFormModalOpen, getCurrentStep } from '../../selectors/observationFormModal';
import { closeObservationFormModal } from '../../actions/observationFormModal';

class ObservationFormModalContainer extends Component {
  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(closeObservationFormModal());
  };

  render() {
    const { isOpen, currentStep } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <ObservationFormModal onClose={this.handleClose} currentStep={currentStep}/>
    );
  }
}

export default connect(state => ({
  isOpen: isObservationFormModalOpen(state),
  currentStep: getCurrentStep(state),
}))(ObservationFormModalContainer);
