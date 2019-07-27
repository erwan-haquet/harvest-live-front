import React, { Component } from 'react';
import { Record } from 'immutable';
import { connect } from 'react-redux';
import ObservationDetailsModalModal from './index';
import { getSelectedObservation } from '../../../selectors/ui/modal/observation/details';
import { isObservationDetailsModalOpen } from '../../../selectors/ui/modal/observation/details';
import { closeObservationDetailsModalAction } from '../../../actions/ui/modal/observation/details';
import { getOne } from '../../../api/mediaObject';

class ObservationDetailsModalModalContainer extends Component {
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

    if (!prevProps.observation || prevProps.observation.id !== observation.id) {
      console.log(observation.id);
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
    dispatch(closeObservationDetailsModalAction());
  };

  render() {
    const { observation, isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    if (observation) {
      const type = Record.getDescriptiveName(observation);

      return (
        <ObservationDetailsModalModal
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
  isOpen: isObservationDetailsModalOpen(state),
}))(ObservationDetailsModalModalContainer);
