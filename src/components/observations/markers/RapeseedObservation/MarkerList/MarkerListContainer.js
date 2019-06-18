import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRapeseedObservationsRequestAction } from '../../../../../actions/rapeseedObservation';
import { getRapeseedObservations } from '../../../../../selectors/rapeseedObservation';
import { getLocation } from '../../../../../selectors/location';
import MarkerList from './index';
import {cultures} from "../../../../../constants/observationCultures";
import {getSelectedCulture} from "../../../../../selectors/filters";

class MarkerListContainer extends Component {
  componentDidUpdate(prevProps) {
    const {
      location: { bounds },
      dispatch,
    } = this.props;

    if (prevProps.location.bounds !== bounds) {
      dispatch(fetchRapeseedObservationsRequestAction({ bounds: bounds }));
    }
  }

  render() {
    const { rapeseedObservations, selectedCulture } = this.props;

    if (selectedCulture && selectedCulture !== cultures.RAPESEED) {
      return null;
    }

    return <MarkerList observations={rapeseedObservations} />;
  }
}

export default connect(state => ({
  rapeseedObservations: getRapeseedObservations(state),
  location: getLocation(state),
  selectedCulture: getSelectedCulture(state),
}))(MarkerListContainer);
