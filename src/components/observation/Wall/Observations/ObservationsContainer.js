import React, { Component } from 'react';
import { connect } from 'react-redux';
import fr from 'date-fns';
import wheat from '../../../../images/wheat.jpg'

import WallObservation from './index';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';


class ObservationsContainer extends Component {

    render() {

        const { observation } = this.props

        const image = () => {
            switch (observation.cultureName) {
                case 'Blé':
                    return wheat;
                default:
                    break;
            }
        }

        const dist = () => {
            let result = distanceInWordsToNow(observation.createdAt, {locale: fr})
            return result;
        }

        return (
            <WallObservation image={image()} observation={observation} distance={dist()} />
        );
    }
}
export default connect()(ObservationsContainer)