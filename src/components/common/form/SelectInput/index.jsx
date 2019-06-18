import React from 'react';
import { Form } from 'react-bootstrap';
import Label from '../Label';

const SelectInput = ({
  input,
  meta: { touched, error },
  label,
  choices,
  required,
}) => (
  <Form.Group>
    <Label label={label} required={required} />
    <Form.Control
      value={input.value}
      onChange={input.onChange}
      as="select"
      isInvalid={error && touched}
    >
      <option value="" />
      {choices.map(choice => (
        <option key={choice.value} value={choice.value}>
          {choice.label}
        </option>
      ))}
    </Form.Control>
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </Form.Group>
);

export default SelectInput;
