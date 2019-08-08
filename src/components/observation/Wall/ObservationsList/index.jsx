import React from 'react';
import ObservationContainer from '../Observations/ObservationsContainer';

const ObservationList = ({observations}) =>
    observations.map((observation)=>(
        <ObservationContainer key={observation.id} observation={observation} />
    ));

    export default ObservationList;