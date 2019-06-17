import React from 'react';

import styles from './styles.module.scss';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLayerGroup} from "@fortawesome/free-solid-svg-icons";

const MapLayerButton = ({ onClick }) => (
    <div className={styles.wrapper}>
        <Button variant="rounded-light" size="lg" onClick={onClick}>
            <FontAwesomeIcon icon={faLayerGroup} />
        </Button>
    </div>
);

export default MapLayerButton;
