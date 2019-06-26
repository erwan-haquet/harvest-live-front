import React, { Component } from 'react';

import ObservationFormContainer from './forms/ObservationForm/ObservationFormContainer';
import UserForm from './forms/UserForm';
import TypeSelectionContainer from './TypeSelection/TypeSelectionContainer';
import CultureSelectionContainer from './CultureSelection/CultureSelectionContainer';

import {
  nextStepObservationCreationModalAction,
  previousStepObservationCreationModalAction,
} from '../../actions/observationCreationModal';
import { connect } from 'react-redux';
import {
  getCulture,
  getCurrentStep,
  getType,
} from '../../selectors/observationCreationModal';
import { types } from '../../constants/observationTypes';
import { cultures } from '../../constants/observationCultures';
import { postWheatObservationRequestAction } from '../../actions/wheatObservation';
import { postBarleyObservationRequestAction } from '../../actions/barleyObservation';
import {postSunflowerObservationRequestAction} from "../../actions/sunflowerObservation";
import {postCornObservationRequestAction} from "../../actions/cornObservation";
import {postRapeseedObservationRequestAction} from "../../actions/rapeseedObservation";
import ExtraForm from "./forms/ExtraForm";

class ObservationCreationContainer extends Component {
  handleSubmit = form => {
    const { dispatch, culture, type } = this.props;

    switch (type) {
      case types.HARVEST:
        switch (culture) {
          case cultures.WHEAT:
            dispatch(postWheatObservationRequestAction({ form: form }));
            break;
          case cultures.BARLEY:
            dispatch(postBarleyObservationRequestAction({ form: form }));
            break;
          case cultures.SUNFLOWER:
            dispatch(postSunflowerObservationRequestAction({ form: form }));
            break;
          case cultures.CORN:
            dispatch(postCornObservationRequestAction({ form: form }));
            break;
          case cultures.RAPESEED:
            dispatch(postRapeseedObservationRequestAction({ form: form }));
            break;
          default:
            return null;
        }
        break;
      default:
        return null;
    }
  };

  nextStep = () => {
    const { dispatch } = this.props;
    dispatch(nextStepObservationCreationModalAction());
  };

  previousStep = () => {
    const { dispatch } = this.props;
    dispatch(previousStepObservationCreationModalAction());
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
          <ExtraForm
            previousStep={this.previousStep}
            onSubmit={this.nextStep}
          />
        )}
        {currentStep === 5 && (
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
