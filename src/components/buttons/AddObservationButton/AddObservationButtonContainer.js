import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddObservationButton from '../AddObservationButton';
import { openObservationCreationModalAction } from '../../../actions/observationCreationModal';

class AddObservationButtonContainer extends Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(openObservationCreationModalAction());
  };

  render() {
    return <AddObservationButton onClick={this.handleClick} />;
  }
}

export default connect()(AddObservationButtonContainer);
