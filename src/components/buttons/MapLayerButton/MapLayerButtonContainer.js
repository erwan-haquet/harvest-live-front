import React, { Component } from 'react';
import { connect } from 'react-redux';

import MapLayerButton from '../MapLayerButton';
import { getStyle } from '../../../selectors/ui/map';
import { setStyle } from '../../../actions/ui/map';
import { layers } from '../../../constants/ui/map';

class MapLayerButtonContainer extends Component {
  handleClick = () => {
    const { dispatch, style } = this.props;

    switch (style) {
      case layers.STREET:
        dispatch(setStyle(layers.SATELLITE));
        break;
      case layers.SATELLITE:
        dispatch(setStyle(layers.STREET));
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
  style: getStyle(state),
}))(MapLayerButtonContainer);
