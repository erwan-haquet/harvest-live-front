import React, { Component } from 'react';

import CultureForm from '../CultureForm';

import {
  nextStepObservationFormModal,
  setCultureObservationFormModal,
} from '../../../../actions/observationFormModal';
import { connect } from 'react-redux';

class ObservationFormContainer extends Component {
  handleClick = culture => {
    const { dispatch } = this.props;
    dispatch(setCultureObservationFormModal(culture));
    dispatch(nextStepObservationFormModal());
  };

  render() {
    return <CultureForm onClick={this.handleClick} />;
  }
}

export default connect()(ObservationFormContainer);
