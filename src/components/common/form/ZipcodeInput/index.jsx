import React from 'react';
import { Form } from 'react-bootstrap';
import AsyncSelect from 'react-select/async/dist/react-select.esm';

import Label from '../Label';

const ZipcodeInput = ({
  input,
  meta: { touched, error },
  label,
  value,
  onBlur,
  loadOptions,
  handleChange,
  placeholder,
  required,
  noOptionsMessage,
  ...props
}) => (
  <Form.Group>
    <Label label={label} required={required} />
    <AsyncSelect
      valueKey="value"
      noOptionsMessage={()=>'Veuillez entrer un code postal'}
      cacheOptions
      value={value}
      loadOptions={loadOptions}
      defaultOptions
      onBlur={onBlur}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
    {touched && error && (
      <Form.Control.Feedback className="invalid-feedback d-block" type="invalid">{error}</Form.Control.Feedback>
    )}
  </Form.Group>
);

export default ZipcodeInput;
