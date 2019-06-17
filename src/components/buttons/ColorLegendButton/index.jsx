import React from 'react';

import styles from './styles.module.scss';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ColorLegendButton = ({ onClick }) => (
  <div className={styles.wrapper}>
    <Button variant="rounded-light" size="md" onClick={onClick}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </Button>
  </div>
);

export default ColorLegendButton;
