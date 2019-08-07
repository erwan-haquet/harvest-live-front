import React from 'react';
import ObservationContainer from '../observation/observationContainer';

const ObservationList = ({observations}) =>
    observations.map((observation)=>(
        <ObservationContainer observations={observation} />
    ));

    export default ObservationList;