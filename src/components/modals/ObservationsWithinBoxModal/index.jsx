import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ObservationsListContainer from '../../observation/WithinBox/ObservationList/ObservationListContainer';

const ObservationsWithinBoxModal = ({ onClose }) => (
  <div className={styles.wrapper}>
    <h5 className={styles.header}>
      <span className={styles.title}> Dernières observations</span>
      <span className={styles.closeButton} onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </h5>
    <div className={styles.observations}>
      <ObservationsListContainer />
    </div>
  </div>
);

export default ObservationsWithinBoxModal;
