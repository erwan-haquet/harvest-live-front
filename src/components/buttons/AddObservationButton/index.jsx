import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';
import Button from 'react-bootstrap/Button';

const AddObservationButton = ({ onClick }) => (
  <div className={styles.wrapper}>
    <Button
      variant="warning"
      size="lg"
      onClick={onClick}
      className={styles.button}
    >
      <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
      <span> Ajouter mon observation </span>
    </Button>
  </div>
);

export default AddObservationButton;
