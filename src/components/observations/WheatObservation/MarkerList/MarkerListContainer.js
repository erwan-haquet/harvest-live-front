import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWheatObservationsRequestAction } from '../../../../actions/wheatObservation';
import { getWheatObservations } from '../../../../selectors/wheatObservation';
import { getLocation } from '../../../../selectors/location';
import MarkerList from './index';
import { cultures } from '../../../../constants/availableObservationCultures';
import { getSelectedCulture } from '../../../../selectors/filters';

class MarkerListContainer extends Component {
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
