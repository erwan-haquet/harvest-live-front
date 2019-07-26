import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddObservationButton from '../AddObservationButton';
import { openModalAction } from '../../../actions/ui/modal/observation/creation';

class AddObservationButtonContainer extends Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(openModalAction());
  };

  render() {
    return <AddObservationButton onClick={this.handleClick} />;
  }
}

export default connect()(AddObservationButtonContainer);
