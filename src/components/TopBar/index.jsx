import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faTruck } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import terreNet from '../../images/terre-net.png';
import styles from './styles.module.scss';
import AddObservationButtonContainer from '../buttons/AddObservationButton/AddObservationButtonContainer';

const TopBar = ({ onStatisticsClick }) => (
  <div className={styles.wrapper}>
    <div className={styles.brand}>
      <div className={styles.logo} />
    </div>
    <div className={styles.partner}>
      <span className={styles.partnerText}>En partenariat avec</span>
      <a href="https://www.terre-net.fr/" target="_blank" rel="noopener noreferrer">
        <img src={terreNet} alt="logo" className={styles.partnerLogo} />
      </a>
    </div>
    <div className={styles.addObservationButtonWrapper}>
      <AddObservationButtonContainer />
    </div>

    <Button
      className={styles.actionButton}
      variant="darken-primary"
      target="_blank"
      rel="noopener noreferrer"
      href="https://comparateuragricole.com"
    >
      <FontAwesomeIcon icon={faTruck} className={styles.sellIcon} />
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
