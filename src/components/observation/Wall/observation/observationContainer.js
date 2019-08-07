import React, { Component } from 'react';
import { connect } from 'react-redux';

import WallObservation from '../../../common/WallObservation/index';

class ObservationContainer extends Component {

    render() {

        const { observations } = this.props

        const dist = () => {
            /*let currentDate = new Date();
            let oldDate = new Date(observations.createdAt);
            let substDate = Math.floor((currentDate - oldDate) % (3600*24) / 3600)*/
            return observations.createdAt;
        }

        return (
            <WallObservation distance={dist()} />
        );
    }
}
export default connect()(ObservationContainer)