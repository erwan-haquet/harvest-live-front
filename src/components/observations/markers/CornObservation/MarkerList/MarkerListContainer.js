import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCornObservationsRequestAction } from '../../../../../actions/cornObservation';
import { getCornObservations } from '../../../../../selectors/cornObservation';
import { getLocation } from '../../../../../selectors/location';
import MarkerList from './index';
import { cultures } from '../../../../../constants/observationCultures';
import { getSelectedCulture } from '../../../../../selectors/filters';

class MarkerListContainer extends Component {
  constructor(props) {
    super(props);

    if (props.location.bounds) {
      props.dispatch(fetchCornObservationsRequestAction({ bounds: props.location.bounds }));
    }
  }
  
  componentDidUpdate(prevProps) {
    const {
      location: { bounds },
      dispatch,
    } = this.props;

    if (prevProps.location.bounds !== bounds) {
      dispatch(fetchCornObservationsRequestAction({ bounds: bounds }));
    }
  }

  render() {
    const { cornObservations, selectedCulture } = this.props;

    if (selectedCulture && selectedCulture !== cultures.CORN) {
      return null;
    }

    return <MarkerList observations={cornObservations} />;
  }
}

export default connect(state => ({
  cornObservations: getCornObservations(state),
  location: getLocation(state),
  selectedCulture: getSelectedCulture(state),
}))(MarkerListContainer);
