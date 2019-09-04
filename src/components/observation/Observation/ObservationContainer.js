import React, { Component } from 'react';
import Observation from './index';
import { selectObservationAction } from '../../../actions/ui/modal/observation/details';
import { connect } from 'react-redux';
import { openObservationDetailsModalAction } from '../../../actions/ui/modal/observation/details';

class ObservationContainer extends Component {
  handleClick = () => {
    const { dispatch, observation } = this.props;
    dispatch(selectObservationAction(observation));
    dispatch(openObservationDetailsModalAction());
  };

  render() {
    const { observation } = this.props;

    return (
        <Observation observation={observation} onClick={this.handleClick} />
    )
  }
}

export default connect()(ObservationContainer);
