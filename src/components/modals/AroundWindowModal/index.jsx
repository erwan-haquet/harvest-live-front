import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ObservationListContainer from '../../../components/observation/Wall/observationList/observationListContainer'

const AroundWIndowModal = ({ onClose }) => (
    <div className={styles.wrapper}>
        <h5 className={styles.header}>
            <span className={styles.closeButton} onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </span>
            Autour de moi
            </h5>
            <ObservationListContainer />
    </div>
);

export default AroundWIndowModal;