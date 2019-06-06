import React, { Component } from 'react';
import { Record } from 'immutable';
import { connect } from 'react-redux';
import ObservationDetails from './index';
import { getSelectedObservation } from '../../selectors/selectedObservation';
import { isObservationDetailsOpen } from '../../selectors/observationDetails';
import {closeObservationDetailsAction} from "../../actions/observationDetails";

class ObservationDetailsContainer extends Component {
  getCultivationMethod = method => {
    switch (method) {
      case 'conventional':
        return 'Conventionnelle';
      case 'simplified cultivation methods':
        return 'TCS';
      case 'organic farming':
        return 'Agriculture biologique';
      default:
        return 'NC';
    }
  };

  getCultureName = type => {
    switch (type) {
      case 'BarleyObservation':
        return 'orge';
      case 'WheatObservation':
        return 'blé';
      case 'SunflowerObservation':
        return 'tournesol';
      case 'RapeseedObservation':
        return 'colza';
      case 'CornObservation':
        return 'maïs';
      default:
        return 'blé';
    }
  };

  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(closeObservationDetailsAction());
  };

  render() {
    const { observation, isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    if (observation) {
      const type = Record.getDescriptiveName(observation);

      return (
        <ObservationDetails
          observation={observation}
          type={type}
          onClose={this.handleClose}
          culture={this.getCultureName(type)}
          cultivationMethod={this.getCultivationMethod(observation.cultivationMethod)}
        />
      );
    }

    return null;
  }
}

export default connect(state => ({
  observation: getSelectedObservation(state),
  isOpen: isObservationDetailsOpen(state),
}))(ObservationDetailsContainer);
