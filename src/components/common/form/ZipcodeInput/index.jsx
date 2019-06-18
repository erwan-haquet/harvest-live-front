import React from 'react';
import { Form } from 'react-bootstrap';
import AsyncSelect from 'react-select/async/dist/react-select.esm';

import Label from '../Label';

const ZipcodeInput = ({
  input,
  meta,
  label,
  value,
  onBlur,
  loadOptions,
  handleChange,
  ...props
}) => (
  <Form.Group>
    <Label label={label} />
    <AsyncSelect
      valueKey="value"
      cacheOptions
      value={value}
      loadOptions={loadOptions}
      defaultOptions
      onBlur={onBlur}
      onChange={handleChange}
      {...props}
    />
  </Form.Group>
);

export default ZipcodeInput;
