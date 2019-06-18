import React from 'react';
import { Form } from 'react-bootstrap';
import Label from '../Label';

const SelectInput = ({ input, meta, label, choices }) => (
  <Form.Group>
    <Label label={label} />
    <Form.Control value={input.value} onChange={input.onChange} as="select">
      {choices.map(choice => (
        <option key={choice.value} value={choice.value}>
          {choice.label}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
);

export default SelectInput;
