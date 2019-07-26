import React from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';
import markerCorn from '../../../images/marker-corn.png';
import markerBarley from '../../../images/marker-barley.png';
import markerSunflower from '../../../images/marker-sunflower.png';
import markerRapeseed from '../../../images/marker-rapeseed.png';
import markerWheat from '../../../images/marker-wheat.png';
import { cultures } from '../../../constants/observation';

const Filters = ({ onClick, isActive }) => (
  <ul className={styles.list}>
    <li
      className={cx(styles.item, {
        [styles.selected]: isActive(null),
      })}
      onClick={() => onClick()}
    >
      Tous
    </li>
    <li
      className={cx(styles.item, {
        [styles.selected]: isActive(cultures.RAPESEED),
      })}
      onClick={() => onClick(cultures.RAPESEED)}
    >
      <img
        className={styles.image}
        src={markerRapeseed}
        alt="rapeseed marker"
      />
      Colza
    </li>
    <li
      className={cx(styles.item, {
        [styles.selected]: isActive(cultures.SUNFLOWER),
      })}
      onClick={() => onClick(cultures.SUNFLOWER)}
    >
      <img
        className={styles.image}
        src={markerSunflower}
        alt="sunflower marker"
      />
      Tournesol
    </li>
    <li
      className={cx(styles.item, {
        [styles.selected]: isActive(cultures.WHEAT),
      })}
      onClick={() => onClick(cultures.WHEAT)}
    >
      <img className={styles.image} src={markerWheat} alt="wheat marker" />
      Blé
    </li>

    <li
      className={cx(styles.item, {
        [styles.selected]: isActive(cultures.CORN),
      })}
      onClick={() => onClick(cultures.CORN)}
    >
      <img className={styles.image} src={markerCorn} alt="corn marker" />
      Maïs
    </li>
    <li
      className={cx(styles.item, {
        [styles.selected]: isActive(cultures.BARLEY),
      })}
      onClick={() => onClick(cultures.BARLEY)}
    >
      <img className={styles.image} src={markerBarley} alt="barley marker" />
      Orge
    </li>
  </ul>
);

export default Filters;
