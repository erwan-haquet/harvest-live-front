import React, { Component } from 'react';
import { connect } from 'react-redux';
import fr from '../../../../../node_modules/date-fns/locale/fr';
import wheat from '../../../../images/wheat.jpg';
import barley from '../../../../images/barley.jpg';
import corn from '../../../../images/corn.jpg';
import rapeseed from '../../../../images/rapeseed.jpg';
import sunflower from '../../../../images/sunflower.jpg'

import Observation from './index';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { selectObservationAction } from '../../../../actions/ui/modal/observation/details';
import { openObservationDetailsModalAction } from '../../../../actions/ui/modal/observation/details';


class ObservationContainer extends Component {

    handleClick = () => {
        const { dispatch, observation } = this.props
        dispatch(selectObservationAction(observation));
        dispatch(openObservationDetailsModalAction());
    };


    render() {

        const { observation } = this.props

        const image = () => {
            switch (observation.cultureName) {
                case 'Blé':
                    return wheat;
                case 'Orge':
                    return barley;
                case 'Maïs':
                    return corn;
                case 'Colza':
                    return rapeseed;
                case 'Tournesol':
                    return sunflower
                default:
                    break;
            }
        }


        const dist = () => {
            let result = distanceInWordsToNow(observation.createdAt, { locale: fr })
            return result;
        }

        return (
            <Observation image={image()} observation={observation} distance={dist()} onClick={this.handleClick} />
        );
    }
}
export default connect()(ObservationContainer)