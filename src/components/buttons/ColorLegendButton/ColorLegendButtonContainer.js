import React, { Component } from 'react';
import { connect } from 'react-redux';

import ColorLegendButton from '../ColorLegendButton';
import { isColorLegendOpen } from '../../../selectors/colorLegend';
import { toggleColorLegendAction } from '../../../actions/colorLegend';

class ColorLegendButtonContainer extends Component {
  handleClick = () => {
    const { dispatch } = this.props;

    dispatch(toggleColorLegendAction());
  };

  render() {
    return <ColorLegendButton onClick={this.handleClick} />;
  }
}

export default connect(state => ({
  isOpen: isColorLegendOpen(state),
}))(ColorLegendButtonContainer);
