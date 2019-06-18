import React, { Component } from 'react';

import ObservationFormContainer from './forms/ObservationForm/ObservationFormContainer';
import UserForm from './forms/UserForm';
import TypeSelectionContainer from './TypeSelection/TypeSelectionContainer';
import CultureSelectionContainer from './CultureSelection/CultureSelectionContainer';

import {
  nextStepObservationFormModal,
  previousStepObservationFormModal,
} from '../../actions/observationFormModal';
import { connect } from 'react-redux';
import {
  getCulture,
  getCurrentStep,
  getType,
} from '../../selectors/observationFormModal';
import { types } from '../../constants/observationTypes';
import { cultures } from '../../constants/observationCultures';
import { postWheatObservationRequestAction } from '../../actions/wheatObservation';

class ObservationCreationContainer extends Component {
  handleSubmit = form => {
    const { dispatch, culture, type } = this.props;
    debugger;

    switch (type) {
      case types.HARVEST:
        switch (culture) {
          case cultures.WHEAT:
            dispatch(postWheatObservationRequestAction({ form: form }));
            break;
          default:
            return null;
        }
      default:
        return null;
    }

  };

  nextStep = () => {
    const { dispatch } = this.props;
    dispatch(nextStepObservationFormModal());
  };

  previousStep = () => {
    const { dispatch } = this.props;
    dispatch(previousStepObservationFormModal());
  };

  render() {
    const { currentStep } = this.props;
    return (
      <div>
        {currentStep === 1 && <TypeSelectionContainer />}
        {currentStep === 2 && (
          <CultureSelectionContainer previousStep={this.previousStep} />
        )}
        {currentStep === 3 && (
          <ObservationFormContainer
            previousStep={this.previousStep}
            onSubmit={this.nextStep}
          />
        )}
        {currentStep === 4 && (
          <UserForm
            previousStep={this.previousStep}
            onSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default connect(state => ({
  currentStep: getCurrentStep(state),
  culture: getCulture(state),
  type: getType(state),
}))(ObservationCreationContainer);
