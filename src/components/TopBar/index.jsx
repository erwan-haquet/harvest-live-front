import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

import logo from '../../images/logo.png';
import styles from './styles.module.scss';

const TopBar = ({ onStatisticsClick }) => (
  <div className={styles.wrapper}>
    <div className={styles.brand}>
      <img src={logo} alt="logo" className={styles.logo} />
      <h4 className={styles.teaser}>Moisson Live</h4>
    </div>
    <Button variant="darken-primary" onClick={onStatisticsClick}>
      <FontAwesomeIcon className={styles.markerIcon} icon={faChartPie} />
      <span className={styles.markerText}>Statistiques</span>
    </Button>
  </div>
);

export default TopBar;
