import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';
import Button from "react-bootstrap/Button";

const GeolocateButton = ({ onClick }) => (
    <div className={styles.wrapper}>
      <Button variant="rounded-light" size="md" onClick={onClick}>
        <FontAwesomeIcon icon={faLocationArrow} />
      </Button>
    </div>
);

export default GeolocateButton;

