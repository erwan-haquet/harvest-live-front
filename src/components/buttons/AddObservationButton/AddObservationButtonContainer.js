import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddObservationButton from '../AddObservationButton';
import { openObservationFormModal } from '../../../actions/observationFormModal';

class AddObservationButtonContainer extends Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(openObservationFormModal());
  };

  render() {
    return <AddObservationButton onClick={this.handleClick} />;
  }
}

export default connect()(AddObservationButtonContainer);
