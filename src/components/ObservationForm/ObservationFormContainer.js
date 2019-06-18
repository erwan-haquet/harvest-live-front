import React, { Component } from 'react';

import CultureFormContainer from './forms/CultureForm/CultureFormContainer';
import ProductForm from './forms/ProductForm';
import YieldForm from './forms/YieldForm';
import UserForm from './forms/UserForm';

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
        {currentStep === 1 && <CultureFormContainer />}
        {currentStep === 2 && (
          <ProductForm
            previousStep={this.previousStep}
            onSubmit={this.nextStep}
          />
        )}
        {currentStep === 3 && (
          <YieldForm
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
