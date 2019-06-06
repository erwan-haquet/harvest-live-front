import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSunflowerObservationsRequestAction } from '../../../actions/sunflowerObservation';
import { getSunflowerObservations } from '../../../selectors/sunflowerObservation';
import { getLocation } from '../../../selectors/location';
import MarkerList from './index';

class MarkerListContainer extends Component {
  componentDidUpdate(prevProps) {
    const {
      location: { bounds },
      dispatch,
    } = this.props;

    if (prevProps.location.bounds !== bounds) {
      dispatch(fetchSunflowerObservationsRequestAction({ bounds: bounds }));
    }
  }

  render() {
    const { sunflowerObservations } = this.props;

    return <MarkerList observations={sunflowerObservations} />;
  }
}

export default connect(state => ({
  sunflowerObservations: getSunflowerObservations(state),
  location: getLocation(state),
}))(MarkerListContainer);
