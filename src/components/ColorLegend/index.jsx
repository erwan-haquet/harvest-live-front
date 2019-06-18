import React from 'react';

import styles from './styles.module.scss';
import markerCorn from '../../images/marker-corn.svg';
import markerBarley from '../../images/marker-barley.svg';
import markerSunflower from '../../images/marker-sunflower.svg';
import markerRapeseed from '../../images/marker-rapeseed.svg';
import markerWheat from '../../images/marker-wheat.svg';
import { cultures } from '../../constants/availableObservationCultures';

const ColorLegend = ({ onClick }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item} onClick={() => onClick(cultures.RAPESEED)}>
        <img
          className={styles.image}
          src={markerRapeseed}
          alt="rapeseed marker"
        />
        Colza
      </li>
      <li className={styles.item} onClick={() => onClick(cultures.SUNFLOWER)}>
        <img
          className={styles.image}
          src={markerSunflower}
          alt="sunflower marker"
        />
        Tournesol
      </li>
      <li className={styles.item} onClick={() => onClick(cultures.WHEAT)}>
        <img className={styles.image} src={markerWheat} alt="wheat marker" />{' '}
        Blé
      </li>

      <li className={styles.item} onClick={() => onClick(cultures.CORN)}>
        <img className={styles.image} src={markerCorn} alt="corn marker" /> Maïs
      </li>
      <li className={styles.item} onClick={() => onClick(cultures.BARLEY)}>
        <img className={styles.image} src={markerBarley} alt="barley marker" />{' '}
        Orge
      </li>
    </ul>
  );
};

export default ColorLegend;
