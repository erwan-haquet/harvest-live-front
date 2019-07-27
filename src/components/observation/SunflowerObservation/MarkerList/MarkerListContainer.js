import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSunflowerObservationsRequestAction } from '../../../../actions/observation/sunflower';
import { getSunflowerObservations } from '../../../../selectors/observation/sunflower';
import { getLocation } from '../../../../selectors/location';
import MarkerList from './index';
import { cultures } from '../../../../constants/observation';
import { getSelectedCulture } from '../../../../selectors/ui/filters';

class MarkerListContainer extends Component {
  constructor(props) {
    super(props);

    if (props.location.bounds) {
      props.dispatch(fetchSunflowerObservationsRequestAction({ bounds: props.location.bounds }));
    }
  }
  
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
    const { sunflowerObservations, selectedCulture } = this.props;

    if (selectedCulture && selectedCulture !== cultures.SUNFLOWER) {
      return null;
    }

    return <MarkerList observations={sunflowerObservations} />;
  }
}

export default connect(state => ({
  sunflowerObservations: getSunflowerObservations(state),
  location: getLocation(state),
  selectedCulture: getSelectedCulture(state),
}))(MarkerListContainer);
