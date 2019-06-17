import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopBar from '../TopBar';
import { getMapStyle } from '../../selectors/mapStyle';
import { openStatisticsModalAction } from '../../actions/statisticsModal';

class MapLayerButtonContainer extends Component {
  handleStatisticsClick = () => {
    const { dispatch } = this.props;
    dispatch(openStatisticsModalAction());
  };

  render() {
    return <TopBar onStatisticsClick={this.handleStatisticsClick} />;
  }
}

export default connect(state => ({
  mapStyle: getMapStyle(state),
}))(MapLayerButtonContainer);
