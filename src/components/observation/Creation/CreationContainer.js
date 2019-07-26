import React, { Component } from 'react';

import ObservationFormContainer from './forms/ObservationForm/ObservationFormContainer';
import UserForm from './forms/UserForm';
import TypeSelectionContainer from './TypeSelection/TypeSelectionContainer';
import CultureSelectionContainer from './CultureSelection/CultureSelectionContainer';

import {
  nextStepAction,
  previousStepAction,
} from '../../../actions/ui/modal/observation/creation';
import { connect } from 'react-redux';
import {
  getCulture,
  getCurrentStep,
  getType,
} from '../../../selectors/ui/modal/observation/creation';
import { types } from '../../../constants/observationTypes';
import { cultures } from '../../../constants/observationCultures';
import { postWheatObservationRequestAction } from '../../../actions/observation/wheat';
import { postBarleyObservationRequestAction } from '../../../actions/observation/barley';
import {postSunflowerObservationRequestAction} from "../../../actions/observation/sunflower";
import {postCornObservationRequestAction} from "../../../actions/observation/corn";
import {postRapeseedObservationRequestAction} from "../../../actions/observation/rapeseed";
import ExtraForm from "./forms/ExtraForm";

class CreationContainer extends Component {
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
    dispatch(nextStepAction());
  };

  previousStep = () => {
    const { dispatch } = this.props;
    dispatch(previousStepAction());
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
}))(CreationContainer);
