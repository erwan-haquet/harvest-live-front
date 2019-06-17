import React from 'react';

import styles from './styles.module.scss';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const MapLayerButton = ({ onClick }) => (
  <div className={styles.wrapper}>
    <Button variant="rounded-light" size="lg" onClick={onClick}>
      <FontAwesomeIcon icon={faQuestion} />
    </Button>
  </div>
);

export default MapLayerButton;
