import React, { Component } from 'react';

import CultureSelection from '../CultureSelection';

import {
  nextStepAction,
  setCultureAction,
} from '../../../../actions/ui/modal/observation/creation';
import { connect } from 'react-redux';

class CultureSelectionContainer extends Component {
  handleClick = culture => {
    const { dispatch } = this.props;
    dispatch(setCultureAction(culture));
    dispatch(nextStepAction());
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
