import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './styles.module.scss';
import StarRatings from 'react-star-ratings';

const Observation = ({
  image,
  observation,
  creationDate,
  onClick,
  cultureMethod,
}) => (
  <Container className={styles.wrapper} onClick={onClick}>
    <img className={styles.image} src={image} alt="culture's name" />
    <h4 className={styles.title}>
      Récolte de {observation.cultureName}
      <small>
        {` `}(Il y a {creationDate} à {observation.place})
      </small>
    </h4>

    <ul className={styles.culturesDetailsWrapper}>
      <li className={styles.culturesDetailsItem}>
        Méthode de culture:<b> {cultureMethod}</b>
      </li>
      <li className={styles.culturesDetailsItem}>
        Rendement: <b>{observation.yield} q</b>
      </li>
      <li className={styles.culturesDetailsItem}>
        Note de rendement:
        <span className={styles.yieldNotationStars}>
          <StarRatings
            rating={observation.yieldNotation}
            starRatedColor="#F37F2B"
            numberOfStars={5}
            name="rating"
            starDimension="18px"
          />
        </span>
      </li>
    </ul>
  </Container>
);

export default Observation;
