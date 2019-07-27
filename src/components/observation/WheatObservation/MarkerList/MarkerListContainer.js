import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWheatObservationsRequestAction } from '../../../../actions/observation/wheat';
import { getWheatObservations } from '../../../../selectors/observation/wheat';
import { getLocation } from '../../../../selectors/location';
import MarkerList from './index';
import { cultures } from '../../../../constants/observation';
import { getSelectedCulture } from '../../../../selectors/ui/filters';

class MarkerListContainer extends Component {
  constructor(props) {
    super(props);
    
    if (props.location.bounds) {
      props.dispatch(fetchWheatObservationsRequestAction({ bounds: props.location.bounds }));
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { bounds },
      dispatch,
    } = this.props;

    if (prevProps.location.bounds !== bounds) {
      dispatch(fetchWheatObservationsRequestAction({ bounds: bounds }));
    }
  }

  render() {
    const { wheatObservations, selectedCulture } = this.props;

    if (selectedCulture && selectedCulture !== cultures.WHEAT) {
      return null;
    }

    return <MarkerList observations={wheatObservations} />;
  }
}

export default connect(state => ({
  wheatObservations: getWheatObservations(state),
  location: getLocation(state),
  selectedCulture: getSelectedCulture(state),
}))(MarkerListContainer);
