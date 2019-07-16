import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopBar from '../TopBar';
import { getMapStyle } from '../../selectors/mapStyle';

class MapLayerButtonContainer extends Component {
  render() {
    return <TopBar />;
  }
}

export default connect(state => ({
  mapStyle: getMapStyle(state),
}))(MapLayerButtonContainer);
