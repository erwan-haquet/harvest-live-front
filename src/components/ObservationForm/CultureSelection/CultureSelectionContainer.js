import React, { Component } from 'react';

import CultureSelection from '../CultureSelection';

import {
  nextStepObservationFormModal,
  setCultureObservationFormModal,
} from '../../../actions/observationFormModal';
import { connect } from 'react-redux';

class CultureSelectionContainer extends Component {
  handleClick = culture => {
    const { dispatch } = this.props;
    dispatch(setCultureObservationFormModal(culture));
    dispatch(nextStepObservationFormModal());
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
