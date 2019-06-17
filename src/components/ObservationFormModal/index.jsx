import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import styles from './styles.module.scss';
import ObservationFormContainer from '../ObservationForm/ObservationFormContainer';

const ObservationFormModal = ({ currentStep, onClose }) => {
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.header}>
        <span className={styles.closeButton} onClick={onClose}>
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
          1. Culture
        </li>
        <li
          className={cx(styles.step, {
            [styles.isActive]: currentStep === 2,
          })}
        >
          2. Produit
        </li>
        <li
          className={cx(styles.step, {
            [styles.isActive]: currentStep === 3,
          })}
        >
          3. Récolte
        </li>
        <li
          className={cx(styles.step, {
            [styles.isActive]: currentStep === 4,
          })}
        >
          4. Coordonées
        </li>
      </ul>
      <div className={styles.formWrapper}>
        <ObservationFormContainer />
      </div>
    </div>
  );
};

export default ObservationFormModal;
