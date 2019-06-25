import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import styles from './styles.module.scss';
import ObservationCreationContainer from '../ObservationCreation/ObservationCreationContainer';

const ObservationFormModal = ({ currentStep, handleClose }) => (
  <div className={styles.wrapper}>
    <h5 className={styles.header}>
      <span className={styles.closeButton} onClick={handleClose}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
      Mon observation
    </h5>
    <ul className={styles.stepList}>
      <li
        className={cx(styles.step, {
          [styles.isActive]: currentStep === 1,
        })}
      >
        <span className={styles.label}>Type</span>
      </li>
      <li
        className={cx(styles.step, {
          [styles.isActive]: currentStep === 2,
        })}
      >
        <span className={styles.label}>Culture</span>
      </li>
      <li
        className={cx(styles.step, {
          [styles.isActive]: currentStep === 3,
        })}
      >
        <span className={styles.label}>Observation</span>
      </li>
      <li
        className={cx(styles.step, {
          [styles.isActive]: currentStep === 4,
        })}
      >
        <span className={styles.label}>Extra</span>
      </li>
      <li
        className={cx(styles.step, {
          [styles.isActive]: currentStep === 5,
        })}
      >
        <span className={styles.label}>Coordonées</span>
      </li>
    </ul>
    <div className={styles.formWrapper}>
      <ObservationCreationContainer />
    </div>
  </div>
);

export default ObservationFormModal;
