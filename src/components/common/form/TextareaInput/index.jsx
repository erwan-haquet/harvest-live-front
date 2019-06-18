import React from 'react';
import { Form } from 'react-bootstrap';
import Label from '../Label';

const TextareaInput = ({
  input,
  meta: { touched, error },
  label,
  required,
}) => {
  return (
    <Form.Group>
      <Label label={label} required={required} />
      <Form.Control
        value={input.value}
        onChange={input.onChange}
        as="textarea"
        isInvalid={error && touched}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default TextareaInput;
