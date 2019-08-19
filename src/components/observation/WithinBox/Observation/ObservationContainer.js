import React, { Component } from 'react';
import { connect } from 'react-redux';
import fr from '../../../../../node_modules/date-fns/locale/fr';
import wheat from '../../../../images/wheat.jpg';
import barley from '../../../../images/barley.jpg';
import corn from '../../../../images/corn.jpg';
import rapeseed from '../../../../images/rapeseed.jpg';
import sunflower from '../../../../images/sunflower.jpg';

import Observation from './index';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { selectObservationAction } from '../../../../actions/ui/modal/observation/details';
import { openObservationDetailsModalAction } from '../../../../actions/ui/modal/observation/details';

class ObservationContainer extends Component {
  handleClick = () => {
    const { dispatch, observation } = this.props;
    dispatch(selectObservationAction(observation));
    dispatch(openObservationDetailsModalAction());
  };

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

  getCultivationImage = cultureName => {
    switch (cultureName) {
      case 'Blé':
        return wheat;
      case 'Orge':
        return barley;
      case 'Maïs':
        return corn;
      case 'Colza':
        return rapeseed;
      case 'Tournesol':
        return sunflower;
      default:
        break;
    }
  };

  getCreationDate = createdAt => {
    let result = distanceInWordsToNow(createdAt, { locale: fr });
    return result;
  };

  render() {
      
    const { observation } = this.props;

    return (
      <Observation
        image={this.getCultivationImage(observation.cultureName)}
        observation={observation}
        creationDate={this.getCreationDate(observation.createdAt)}
        onClick={this.handleClick}
        cultureMethod={this.getCultivationMethod(observation.cultivationMethod)}
      />
    );
  }
}
export default connect()(ObservationContainer);
