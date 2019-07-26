import React, { Component } from 'react';

import TypeSelection from '../TypeSelection';

import {
  nextStepAction,
  setTypeAction,
} from '../../../../actions/ui/modal/observation/creation';
import { connect } from 'react-redux';

class TypeSelectionContainer extends Component {
  handleClick = type => {
    const { dispatch } = this.props;
    dispatch(setTypeAction(type));
    dispatch(nextStepAction());
  };

  render() {
    return <TypeSelection onClick={this.handleClick} />;
  }
}

export default connect()(TypeSelectionContainer);
