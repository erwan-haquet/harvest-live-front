import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';
import Button from 'react-bootstrap/Button';

const AddObservationButton = ({ onClick }) => (
  <Button variant="warning" onClick={onClick} className={styles.button}>
    <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
    <span>Partager mes rendements </span>
  </Button>
);

export default AddObservationButton;
