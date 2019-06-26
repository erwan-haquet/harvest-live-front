import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTractor,
  faSeedling,
  faTint,
} from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { types } from '../../../../constants/observationTypes';
import SectionTitle from '../SectionTitle';

const CultureForm = ({ onClick }) => {
  return (
    <Fragment>
      <SectionTitle title="Selectionnez le type d'obervation" />
      <Row>
        <Col xs={6} lg={4} className={styles.col}>
          <Button
            className={styles.button}
            variant="secondary"
            onClick={() => onClick(types.HARVEST)}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={faTractor}
              size="3x"
            />
            <p className={styles.label}>Récolte</p>
          </Button>
        </Col>
        <Col xs={6} lg={4} className={styles.col}>
          <Button
            className={styles.button}
            variant="secondary"
            onClick={() => onClick(types.INTERVENTION)}
            disabled
          >
            <FontAwesomeIcon className={styles.icon} icon={faTint} size="3x" />
            <p className={styles.label}>Intervention</p>
          </Button>
        </Col>
        <Col xs={6} lg={4} className={styles.col}>
          <Button
            className={styles.button}
            variant="secondary"
            onClick={() => onClick(types.SEEDLING)}
            disabled
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={faSeedling}
              size="3x"
            />
            <p className={styles.label}>Semis</p>
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CultureForm;
