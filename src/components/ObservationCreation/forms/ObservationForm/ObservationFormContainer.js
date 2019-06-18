import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  getCulture,
  getType,
} from '../../../../selectors/observationFormModal';
import { types } from '../../../../constants/observationTypes';
import { cultures } from '../../../../constants/observationCultures';
import WheatObservationForm from '../harvest/WheatObservationForm';

class ObservationFormContainer extends Component {
  render() {
    const { type, culture, previousStep, onSubmit } = this.props;

    switch (type) {
      case types.HARVEST:
        switch (culture) {
          case cultures.WHEAT:
            return (
              <WheatObservationForm
                previousStep={previousStep}
                onSubmit={onSubmit}
              />
            );
          default:
            return null;
        }
      default:
        return null;
    }
  }
}

export default connect(state => ({
  culture: getCulture(state),
  type: getType(state),
}))(ObservationFormContainer);
