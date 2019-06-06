import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWheatObservationsRequestAction } from '../../../actions/wheatObservation';
import { getWheatObservations } from '../../../selectors/wheatObservation';
import { getLocation } from '../../../selectors/location';
import MarkerList from './index';

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
    const { wheatObservations } = this.props;

    return <MarkerList observations={wheatObservations} />;
  }
}

export default connect(state => ({
  wheatObservations: getWheatObservations(state),
  location: getLocation(state),
}))(MarkerListContainer);
