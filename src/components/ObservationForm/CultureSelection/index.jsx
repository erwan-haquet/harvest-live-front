import React, { Fragment } from 'react';

import styles from './styles.module.scss';

import wheat from '../../../images/wheat.jpg';
import rapeseed from '../../../images/rapeseed.jpg';
import corn from '../../../images/corn.jpg';
import sunflower from '../../../images/sunflower.jpg';
import barley from '../../../images/barley.jpg';
import peas from '../../../images/peas.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { cultures } from '../../../constants/observationCultures';
import NavigationBar from '../NavigationBar';
import SectionTitle from '../SectionTitle';

const CultureSelection = ({ onClick, previousStep }) => {
  return (
    <Fragment>
      <SectionTitle title="Selectionnez la culture" />
      <Row>
        <Col xs={4} md={4} lg={2} className={styles.col}>
          <Button variant="secondary" onClick={() => onClick(cultures.WHEAT)}>
            <img src={wheat} alt={cultures.WHEAT} className={styles.image} />
            <p className={styles.label}>Blé</p>
          </Button>
        </Col>
        <Col xs={4} md={4} lg={2} className={styles.col}>
          <Button
            variant="secondary"
            onClick={() => onClick(cultures.RAPESEED)}
          >
            <img
              src={rapeseed}
              alt={cultures.RAPESEED}
              className={styles.image}
            />
            <p className={styles.label}>Colza</p>
          </Button>
        </Col>
        <Col xs={4} md={4} lg={2} className={styles.col}>
          <Button variant="secondary" onClick={() => onClick(cultures.CORN)}>
            <img src={corn} alt={cultures.CORN} className={styles.image} />
            <p className={styles.label}>Maïs</p>
          </Button>
        </Col>
        <Col xs={4} md={4} lg={2} className={styles.col}>
          <Button
            variant="secondary"
            onClick={() => onClick(cultures.SUNFLOWER)}
          >
            <img
              src={sunflower}
              alt={cultures.SUNFLOWER}
              className={styles.image}
            />
            <p className={styles.label}>Tournesol</p>
          </Button>
        </Col>
        <Col xs={4} md={4} lg={2} className={styles.col}>
          <Button variant="secondary" onClick={() => onClick(cultures.BARLEY)}>
            <img src={barley} alt={cultures.BARLEY} className={styles.image} />
            <p className={styles.label}>Orge</p>
          </Button>
        </Col>
        <Col xs={4} md={4} lg={2} className={styles.col}>
          <Button variant="secondary" disabled>
            <img src={peas} alt={cultures.PEAS} className={styles.image} />
            <p className={styles.label}>Pois</p>
          </Button>
        </Col>
      </Row>
      <NavigationBar previousStep={previousStep} />
    </Fragment>
  );
};

export default CultureSelection;
