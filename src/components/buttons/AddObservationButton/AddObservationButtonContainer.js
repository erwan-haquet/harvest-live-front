import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddObservationButton from '../AddObservationButton';
import { openObservationFormModalAction } from '../../../actions/observationFormModal';

class AddObservationButtonContainer extends Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(openObservationFormModalAction());
  };

  render() {
    return <AddObservationButton onClick={this.handleClick} />;
  }
}

export default connect()(AddObservationButtonContainer);
