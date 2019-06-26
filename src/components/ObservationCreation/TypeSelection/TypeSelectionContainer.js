import React, { Component } from 'react';

import TypeSelection from '../TypeSelection';

import {
  nextStepObservationCreationModalAction,
  setTypeObservationCreationModalAction,
} from '../../../actions/observationCreationModal';
import { connect } from 'react-redux';

class TypeSelectionContainer extends Component {
  handleClick = type => {
    const { dispatch } = this.props;
    dispatch(setTypeObservationCreationModalAction(type));
    dispatch(nextStepObservationCreationModalAction());
  };

  render() {
    return <TypeSelection onClick={this.handleClick} />;
  }
}

export default connect()(TypeSelectionContainer);
