import React, { Component } from 'react';

import TypeSelection from '../TypeSelection';

import {
  nextStepObservationFormModalAction,
  setTypeObservationFormModalAction,
} from '../../../actions/observationFormModal';
import { connect } from 'react-redux';

class TypeSelectionContainer extends Component {
  handleClick = type => {
    const { dispatch } = this.props;
    dispatch(setTypeObservationFormModalAction(type));
    dispatch(nextStepObservationFormModalAction());
  };

  render() {
    return <TypeSelection onClick={this.handleClick} />;
  }
}

export default connect()(TypeSelectionContainer);
