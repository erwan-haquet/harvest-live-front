import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorLegend from './index';
import { isColorLegendOpen } from '../../selectors/colorLegend';
import {setSelectedCulture} from "../../actions/filters";

class ColorLegendContainer extends Component {
  handleClick = (culture) => {
    const { dispatch } = this.props;
    dispatch(setSelectedCulture(culture));
  };

  render() {
    const { isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    return <ColorLegend onClick={this.handleClick} />;
  }
}

export default connect(state => ({
  isOpen: isColorLegendOpen(state),
}))(ColorLegendContainer);
