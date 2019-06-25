import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const Spinner = ({ size, color }) => (
  <div className={styles.wrapper}>
    <FontAwesomeIcon spin icon={faSpinner} size={size} color={color} />
    <span className={styles.label}>CHARGEMENT...</span>
  </div>
);

Spinner.defaultProps = {
  size: '2x',
  color: '#565656',
};

export default Spinner;
