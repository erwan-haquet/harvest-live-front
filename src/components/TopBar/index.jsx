import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faTruck } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import logo from '../../images/logo.png';
import styles from './styles.module.scss';
import AddObservationButtonContainer from '../buttons/AddObservationButton/AddObservationButtonContainer';

const TopBar = ({ onStatisticsClick }) => (
  <div className={styles.wrapper}>
    <div className={styles.brand}>
      <img src={logo} alt="logo" className={styles.logo} />
      <h4 className={styles.teaser}>Moisson Live</h4>
    </div>
    <div className={styles.addObservationButtonWrapper}>
      <AddObservationButtonContainer />
    </div>

    <Button
      className={styles.actionButton}
      variant="darken-primary"
      target="_BLANK"
      href="https://comparateuragricole.com"
    >
      <FontAwesomeIcon icon={faTruck} />
      <span className={styles.markerText}>Vendre ma récolte</span>
    </Button>
    <Button variant="darken-primary" onClick={onStatisticsClick}>
      <FontAwesomeIcon icon={faChartPie} />
      <span className={cx(styles.markerText, styles.statisticLabel)}>
        Statistiques
      </span>
    </Button>
  </div>
);

export default TopBar;
