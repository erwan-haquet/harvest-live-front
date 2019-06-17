import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';
import chartImg from '../../images/chart.png';

const ObservationDetails = ({ onClose }) => {
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.header}>
        <span className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        Statistiques de la moisson
      </h5>
      <div className={styles.contentWrapper}>
        <img src={chartImg} alt="logo" className={styles.chartImg} />
        <h5>
          Les données ne sont pas encore mûres. <br />
          Revenez plus tard.
        </h5>
      </div>
    </div>
  );
};

export default ObservationDetails;
