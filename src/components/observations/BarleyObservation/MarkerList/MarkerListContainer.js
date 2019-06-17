import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBarleyObservationsRequestAction } from '../../../../actions/barleyObservation';
import { getBarleyObservations } from '../../../../selectors/barleyObservation';
import { getLocation } from '../../../../selectors/location';
import MarkerList from './index';

class MarkerListContainer extends Component {
  componentDidUpdate(prevProps) {
    const {
      location: { bounds },
      dispatch,
    } = this.props;

    if (prevProps.location.bounds !== bounds) {
      dispatch(fetchBarleyObservationsRequestAction({ bounds: bounds }));
    }
  }

  render() {
    const { barleyObservations } = this.props;

    return <MarkerList observations={barleyObservations} />;
  }
}

export default connect(state => ({
  barleyObservations: getBarleyObservations(state),
  location: getLocation(state),
}))(MarkerListContainer);
