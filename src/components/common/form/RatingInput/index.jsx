import React from 'react';
import { Form } from 'react-bootstrap';
import Label from '../Label';
import StarRatings from 'react-star-ratings';
import styles from './styles.module.scss';

const RatingInput = ({
  input,
  meta: { touched, error },
  label,
  required,
  legends
}) => (
  <Form.Group>
    <Label label={label} required={required} />
    <br />
    <StarRatings
      rating={input.value}
      starRatedColor='#F37F2B'
      starHoverColor='#F37F2B'
      changeRating={input.onChange}
      numberOfStars={5}
      name='rating'
      starDimension='40px'
    />
    {touched && error && (
      <Form.Control.Feedback
        className='invalid-feedback d-block'
        type='invalid'
      >
        {error}
      </Form.Control.Feedback>
    )}
    {input.value > 0 && (
      <div legends={legends} className={styles.legendWrapper}>
        {legends[input.value]}
      </div>
    )}
  </Form.Group>
);

export default RatingInput;
