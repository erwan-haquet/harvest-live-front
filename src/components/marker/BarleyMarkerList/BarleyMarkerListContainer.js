import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBarleyObservationsRequestAction } from '../../../actions/barleyObservation';
import { getBarleyObservations } from '../../../selectors/barleyObservation';
import { getLocation } from '../../../selectors/location';
import BarleyMarkerList from './index';

class BarleyMarkerListContainer extends Component {
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

    return <BarleyMarkerList barleyObservations={barleyObservations} />;
  }
}

export default connect(state => ({
  barleyObservations: getBarleyObservations(state),
  location: getLocation(state),
}))(BarleyMarkerListContainer);
