import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorLegend from './index';
import { setSelectedCulture } from '../../actions/filters';

class ColorLegendContainer extends Component {
  handleClick = culture => {
    const { dispatch } = this.props;
    dispatch(setSelectedCulture(culture));
  };

  render() {
    return <ColorLegend onClick={this.handleClick} />;
  }
}

export default connect()(ColorLegendContainer);
