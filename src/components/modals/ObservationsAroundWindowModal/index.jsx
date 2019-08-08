import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ObservationsListContainer from '../../observation/Wall/ObservationsList/ObservationsListContainer'

const ObservationsAroundWindowModal = ({ onClose }) => (
    <div sticky="top" className={styles.wrapper}>
        <h5 className={styles.header}>
            <span className={styles.closeButton} onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </span>
            Dernières observations
            </h5>
            <ObservationsListContainer />
    </div>
);

export default ObservationsAroundWindowModal;