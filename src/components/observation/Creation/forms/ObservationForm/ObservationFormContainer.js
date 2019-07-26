import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  getCulture,
  getType,
} from '../../../../../selectors/ui/modal/observation/creation';
import { types, cultures } from '../../../../../constants/observation';
import WheatObservationForm from '../harvest/WheatObservationForm';
import BarleyObservationForm from '../harvest/BarleyObservationForm';
import SunflowerObservationForm from '../harvest/SunflowerObservationForm';
import CornObservationForm from '../harvest/CornObservationForm';
import RapeseedObservationForm from '../harvest/RapeseedObservationForm';

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
          case cultures.BARLEY:
            return (
              <BarleyObservationForm
                previousStep={previousStep}
                onSubmit={onSubmit}
              />
            );
          case cultures.SUNFLOWER:
            return (
              <SunflowerObservationForm
                previousStep={previousStep}
                onSubmit={onSubmit}
              />
            );
          case cultures.CORN:
            return (
              <CornObservationForm
                previousStep={previousStep}
                onSubmit={onSubmit}
              />
            );
          case cultures.RAPESEED:
            return (
              <RapeseedObservationForm
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
