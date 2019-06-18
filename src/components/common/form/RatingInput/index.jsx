import React from 'react';
import { Form } from 'react-bootstrap';
import Label from '../Label';
import StarRatings from 'react-star-ratings';

const RatingInput = ({ input, meta, label }) => (
  <Form.Group>
    <Label label={label} />
    <br />
    <StarRatings
      rating={input.value}
      starRatedColor="#F37F2B"
      starHoverColor="#F37F2B"
      changeRating={input.onChange}
      numberOfStars={5}
      name="rating"
    />
  </Form.Group>
);

export default RatingInput;
