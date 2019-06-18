import React from 'react';
import { Form } from 'react-bootstrap';
import Label from '../Label';

const TextareaInput = ({ input, meta, label }) => {
  return (
    <Form.Group>
      <Label label={label} />
      <Form.Control
        value={input.value}
        onChange={input.onChange}
        as="textarea"
      />
    </Form.Group>
  );
};

export default TextareaInput;
