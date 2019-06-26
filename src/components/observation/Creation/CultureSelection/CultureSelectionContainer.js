import React, { Component } from 'react';

import CultureSelection from '../CultureSelection';

import {
  nextStepObservationCreationModalAction,
  setCultureObservationCreationModalAction,
} from '../../../../actions/observationCreationModal';
import { connect } from 'react-redux';

class CultureSelectionContainer extends Component {
  handleClick = culture => {
    const { dispatch } = this.props;
    dispatch(setCultureObservationCreationModalAction(culture));
    dispatch(nextStepObservationCreationModalAction());
  };

  render() {
    const { previousStep } = this.props;

    return (
      <CultureSelection
        onClick={this.handleClick}
        previousStep={previousStep}
      />
    );
  }
}

export default connect()(CultureSelectionContainer);
