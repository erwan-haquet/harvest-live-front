import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import cx from 'classnames';
import StarRatings from 'react-star-ratings';

const WallObservation = ({ image, observation, distance }) => (
    <Container>
        <Row className="mb-4" >
            <Col xs={3}>
                <img src={image} alt="culture's name" />
            </Col>
            <Col xs={9}>
                <p>Culture de {observation.cultureName}</p>
                <p>Partagée il y a {distance} à {observation.place}  </p>
                <p><StarRatings
                    rating={observation.yieldNotation}
                    starRatedColor="#F37F2B"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                /></p>
            </Col>
        </Row >
    </Container >
);

export default WallObservation;