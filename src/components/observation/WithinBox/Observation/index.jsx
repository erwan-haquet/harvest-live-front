import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from './styles.module.scss';
import StarRatings from 'react-star-ratings';

const Observation = ({ image, observation, creationDate, onClick, cultureMethod }) => (
    <Container>
        <Row className={styles.wrapper} onClick={onClick} >
            <Col className={styles.observationText} xs={3}>
                <img className={styles.image} src={image} alt="culture's name" />
            </Col>
            <Col className={styles.observationText} xs={9}>
                <figure>
                    <h4>Culture de {observation.cultureName}</h4>
                    <figcaption><small>Partagée il y a {creationDate} à {observation.place} </small></figcaption>
                </figure>
                <span className={styles.culturesDetailsWrapper}>
                    <p>
                        <small>{cultureMethod} </small>
                        <small>{observation.yield} q</small>
                    </p>
                </span>
                <div className={styles.starsWrapper}><StarRatings

                    rating={observation.yieldNotation}
                    starRatedColor="#F37F2B"
                    numberOfStars={5}
                    name="rating"
                    starDimension="18px"
                />
                </div>
            </Col>
        </Row >
    </Container >
);

export default Observation;