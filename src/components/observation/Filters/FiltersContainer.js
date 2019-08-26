import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from './index';
import { setSelectedCulture } from '../../../actions/ui/filters';
import { getSelectedCulture } from '../../../selectors/ui/filters';

class FiltersContainer extends Component {
  handleClick = culture => {
    const { dispatch } = this.props;
    dispatch(setSelectedCulture(culture));
  };

  isActive = culture => {
    const { selectedCulture } = this.props;
    return !selectedCulture || selectedCulture === culture;
  };

  render() {
    return <Filters isActive={this.isActive} onClick={this.handleClick} />;
  }
}

export default connect(state => ({
  selectedCulture: getSelectedCulture(state),
}))(FiltersContainer);
