import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObservationFormModal from './index';
import { isObservationFormModalOpen, getCurrentStep } from '../../selectors/observationFormModal';
import { closeObservationFormModalAction } from '../../actions/observationFormModal';

class ObservationFormModalContainer extends Component {
  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(closeObservationFormModalAction());
  };

  render() {
    const { isOpen, currentStep } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <ObservationFormModal handleClose={this.handleClose} currentStep={currentStep}/>
    );
  }
}

export default connect(state => ({
  isOpen: isObservationFormModalOpen(state),
  currentStep: getCurrentStep(state),
}))(ObservationFormModalContainer);
