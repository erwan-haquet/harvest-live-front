import React, { Component } from 'react';

import TypeSelection from '../TypeSelection';

import {
  nextStepObservationFormModal,
  setTypeObservationFormModal,
} from '../../../actions/observationFormModal';
import { connect } from 'react-redux';

class TypeSelectionContainer extends Component {
  handleClick = type => {
    const { dispatch } = this.props;
    dispatch(setTypeObservationFormModal(type));
    dispatch(nextStepObservationFormModal());
  };

  render() {
    return <TypeSelection onClick={this.handleClick} />;
  }
}

export default connect()(TypeSelectionContainer);
