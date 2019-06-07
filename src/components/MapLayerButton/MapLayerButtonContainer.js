import React, { Component } from 'react';
import { connect } from 'react-redux';

import MapLayerButton from '../MapLayerButton';
import { getMapStyle } from '../../selectors/mapStyle';
import { setMapStyle } from '../../actions/mapStyle';

class MapLayerButtonContainer extends Component {
  handleClick = () => {
    const { dispatch, mapStyle: currentMapStyle } = this.props;

    switch (currentMapStyle) {
      case 'streets-v11':
        dispatch(setMapStyle('satellite-streets-v9'));
        break;
      case 'satellite-streets-v9':
        dispatch(setMapStyle('streets-v11'));
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
