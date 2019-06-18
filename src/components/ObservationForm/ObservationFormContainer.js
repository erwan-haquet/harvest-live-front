import React, { Component } from 'react';

import ObservationForm from './forms/ObservationForm';
import UserForm from './forms/UserForm';
import TypeSelectionContainer from './TypeSelection/TypeSelectionContainer';
import CultureSelectionContainer from "./CultureSelection/CultureSelectionContainer";

import {
  nextStepObservationFormModal,
  previousStepObservationFormModal,
} from '../../actions/observationFormModal';
import { connect } from 'react-redux';
import { getCurrentStep } from '../../selectors/observationFormModal';

class ObservationFormContainer extends Component {
  nextStep = () => {
    const { dispatch } = this.props;
    dispatch(nextStepObservationFormModal());
  };

  previousStep = () => {
    const { dispatch } = this.props;
    dispatch(previousStepObservationFormModal());
  };

  render() {
    const { onSubmit, currentStep } = this.props;
    return (
      <div>
        {currentStep === 1 && <TypeSelectionContainer />}
        {currentStep === 2 && <CultureSelectionContainer previousStep={this.previousStep} />}
        {currentStep === 3 && (
          <ObservationForm
            previousStep={this.previousStep}
            onSubmit={this.nextStep}
          />
        )}
        {currentStep === 4 && (
          <UserForm previousStep={this.previousStep} onSubmit={onSubmit} />
        )}
      </div>
    );
  }
}

export default connect(state => ({
  currentStep: getCurrentStep(state),
}))(ObservationFormContainer);
