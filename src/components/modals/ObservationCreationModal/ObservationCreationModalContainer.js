import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObservationCreationModal from './index';
import {
  isObservationCreationModalOpen,
  getCurrentStep,
} from '../../../selectors/ui/modal/observation/creation';
import { closeModalAction } from '../../../actions/ui/modal/observation/creation';

class ObservationCreationModalContainer extends Component {
  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(closeModalAction());
  };

  render() {
    const { isOpen, currentStep } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <ObservationCreationModal
        handleClose={this.handleClose}
        currentStep={currentStep}
      />
    );
  }
}

export default connect(state => ({
  isOpen: isObservationCreationModalOpen(state),
  currentStep: getCurrentStep(state),
}))(ObservationCreationModalContainer);
