import React, { Component } from 'react';
import { Record } from 'immutable';
import { connect } from 'react-redux';
import ObservationDetailsModal from './index';
import { getSelectedObservation } from '../../../selectors/selectedObservation';
import { isObservationDetailsOpen } from '../../../selectors/observationDetails';
import { closeObservationDetailsAction } from '../../../actions/observationDetails';
import { getOne } from '../../../api/mediaObject';

class ObservationDetailsModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null };
  }

  componentDidUpdate(prevProps) {
    const { observation } = this.props;

    if (
      !prevProps.observation ||
      prevProps.observation.image !== observation.image
    ) {
      getOne(observation.image).then(mediaObject => {
        this.setState({
          image: mediaObject,
        });
      });
    }
  }

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
        <ObservationDetailsModal
          observation={observation}
          type={type}
          image={this.state.image}
          onClose={this.handleClose}
          culture={this.getCultureName(type)}
          cultivationMethod={this.getCultivationMethod(
            observation.cultivationMethod,
          )}
        />
      );
    }

    return null;
  }
}

export default connect(state => ({
  observation: getSelectedObservation(state),
  isOpen: isObservationDetailsOpen(state),
}))(ObservationDetailsModalContainer);
