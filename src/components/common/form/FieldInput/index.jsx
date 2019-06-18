import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Label from '../Label';

const FieldInput = ({
  input,
  meta,
  type,
  placeholder,
  min,
  max,
  label,
  append,
}) => (
  <Form.Group>
    <Label label={label} />
    <InputGroup>
      <Form.Control
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        value={input.value}
        onChange={input.onChange}
      />
      {append && (
        <InputGroup.Append>
          <InputGroup.Text id="inputGroupAppend">{append}</InputGroup.Text>
        </InputGroup.Append>
      )}
    </InputGroup>
  </Form.Group>
);

export default FieldInput;
