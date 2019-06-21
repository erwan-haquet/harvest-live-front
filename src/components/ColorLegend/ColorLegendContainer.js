import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorLegend from './index';
import { setSelectedCulture } from '../../actions/filters';
import { getSelectedCulture } from '../../selectors/filters';

class ColorLegendContainer extends Component {
  handleClick = culture => {
    const { dispatch } = this.props;
    dispatch(setSelectedCulture(culture));
  };

  render() {
    const { selectedCulture } = this.props;

    return <ColorLegend selectedCulture={selectedCulture} onClick={this.handleClick} />;
  }
}

export default connect(state => ({
  selectedCulture: getSelectedCulture(state),
}))(ColorLegendContainer);
