import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faTruck } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import terreNet from '../../images/terre-net.png';
import styles from './styles.module.scss';
import AddObservationButtonContainer from '../buttons/AddObservationButton/AddObservationButtonContainer';
import AroundButtonContainer from '../buttons/ObservationsAroundButton/ObservationsAroundButtonContainer';

const TopBar = () => (
  <div className={styles.wrapper}>
    <div className={styles.brand}>
      <div className={styles.logo} />
    </div>
    <div className={styles.partner}>
      <span className={styles.partnerText}>En partenariat avec</span>
      <a
        href="https://www.terre-net.fr/?utm_source=MoissonLive.com&utm_medium=link&utm_campaign=Moisson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={terreNet} alt="logo" className={styles.partnerLogo} />
      </a>
    </div>
    <div className={styles.addObservationButtonWrapper}>
      <AddObservationButtonContainer />
    </div>
    <div className={styles.aroundButtonWrapper}>
      <AroundButtonContainer />
    </div>
    <Button
      className={styles.statisticButton}
      variant="premium"
      target="_blank"
      rel="noopener noreferrer"
      href="https://infogram.com/resultats-moisson-orge-2019-1hdw2jqke8dp4l0?live"
    >
      <FontAwesomeIcon icon={faChartPie} />
      <span className={cx(styles.markerText, styles.statisticLabel)}>
        Resultats
      </span>
    </Button>
    <Button
      variant="darken-primary"
      target="_blank"
      rel="noopener noreferrer"
      href="https://comparateuragricole.com"
    >
      <FontAwesomeIcon icon={faTruck} className={styles.sellIcon} />
      <span className={styles.markerText}>Vendre ma récolte</span>
    </Button>
  </div>
);

export default TopBar;
