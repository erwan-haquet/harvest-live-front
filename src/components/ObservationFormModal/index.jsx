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
        Type
      </li>
      <li
        className={cx(styles.step, {
          [styles.isActive]: currentStep === 2,
        })}
      >
        Culture
      </li>
      <li
        className={cx(styles.step, {
          [styles.isActive]: currentStep === 3,
        })}
      >
        Observation
      </li>
      <li
        className={cx(styles.step, {
          [styles.isActive]: currentStep === 4,
        })}
      >
        Coordonées
      </li>
    </ul>
    <div className={styles.formWrapper}>
      <ObservationCreationContainer />
    </div>
  </div>
);

export default ObservationFormModal;
