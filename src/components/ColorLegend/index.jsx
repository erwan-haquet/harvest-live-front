import React from 'react';

import styles from './styles.module.scss';
import markerBlue from '../../images/marker-blue.svg';
import markerGreen from '../../images/marker-green.svg';
import markerPurple from '../../images/marker-purple.svg';
import markerOrange from '../../images/marker-orange.svg';
import markerRed from '../../images/marker-red.svg';
import {cultures} from "../../constants/availableObservationCultures";

const ColorLegend = ({onClick}) => {
  return (
    <ul className={styles.list}>
        <li className={styles.item} onClick={() => onClick(cultures.CORN)}><img src={markerBlue} alt="blue marker" /> Maïs</li>
        <li className={styles.item} onClick={() => onClick(cultures.BARLEY)}><img src={markerGreen} alt="green marker" /> Orge</li>
        <li className={styles.item} onClick={() => onClick(cultures.SUNFLOWER)}><img src={markerPurple} alt="purple marker" /> Tournesol</li>
        <li className={styles.item} onClick={() => onClick(cultures.WHEAT)}><img src={markerOrange} alt="orange marker" /> Blé</li>
        <li className={styles.item} onClick={() => onClick(cultures.RAPESEED)}><img src={markerRed} alt="red marker" /> Colza</li>
    </ul>
  );
};

export default ColorLegend;
