import React from 'react';
import Moment from 'react-moment';

const WallObservation = ({image, date, distance}) => (
    <div>
        <img src={image} />
        <p>Créee il y a <Moment date={distance} durationFromNow /> jours à km de chez vous</p>
    </div>
);

export default WallObservation;