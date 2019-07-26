import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopBar from '../TopBar';
import { getStyle } from '../../selectors/ui/map';

class MapLayerButtonContainer extends Component {
  render() {
    return <TopBar />;
  }
}

export default connect(state => ({
  style: getStyle(state),
}))(MapLayerButtonContainer);
