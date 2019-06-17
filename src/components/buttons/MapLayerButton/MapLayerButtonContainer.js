import React, { Component } from 'react';
import { connect } from 'react-redux';

import MapLayerButton from '../MapLayerButton';
import { getMapStyle } from '../../../selectors/mapStyle';
import { setMapStyle } from '../../../actions/mapStyle';
import { layers } from '../../../constants/mapStyle';

class MapLayerButtonContainer extends Component {
  handleClick = () => {
    const { dispatch, mapStyle: currentMapStyle } = this.props;

    switch (currentMapStyle) {
      case layers.STREET:
        dispatch(setMapStyle(layers.SATELLITE));
        break;
      case layers.SATELLITE:
        dispatch(setMapStyle(layers.STREET));
        break;
      default:
        break;
    }
  };

  render() {
    return <MapLayerButton onClick={this.handleClick} />;
  }
}

export default connect(state => ({
  mapStyle: getMapStyle(state),
}))(MapLayerButtonContainer);
