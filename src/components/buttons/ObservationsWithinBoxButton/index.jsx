import React from 'react';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const ObservationsWithinBoxButton =({ onClick }) => (
    <Button variant="danger" onClick={onClick} className={styles.button}>
        <FontAwesomeIcon icon={faBookOpen} className={styles.icon} />
        <span className={styles.bookMarker}>Dernières observations</span>
    </Button>
);

export default ObservationsWithinBoxButton;