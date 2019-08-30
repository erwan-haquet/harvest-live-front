import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBarleyObservationsRequestAction } from '../../../../actions/observation/barley';
import { getBarleyObservations } from '../../../../selectors/observation/barley';
import { getLocation } from '../../../../selectors/location';
import MarkerList from './index';
import { getSelectedCulture } from '../../../../selectors/ui/filters';
import { cultures } from '../../../../constants/observation';

class MarkerListContainer extends Component {
  constructor(props) {
    super(props);
    
    if (props.location.bounds) {
      props.dispatch(fetchBarleyObservationsRequestAction({ bounds: props.location.bounds }));
    }
  }

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
    const { barleyObservations, selectedCulture } = this.props;

    if (selectedCulture && selectedCulture !== cultures.BARLEY) {
      return null;
    }

    return <MarkerList observations={barleyObservations} />;
  }
}

export default connect(state => ({
  barleyObservations: getBarleyObservations(state),
  location: getLocation(state),
  selectedCulture: getSelectedCulture(state),
}))(MarkerListContainer);