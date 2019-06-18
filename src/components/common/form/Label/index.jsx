import React from 'react';
import { Form } from 'react-bootstrap';
import cx from 'classnames';

import styles from './styles.module.scss';

const Label = ({ label, required }) => (
  <Form.Label className={cx(styles.label, { [styles.required]: required })}>
    {label}
  </Form.Label>
);

export default Label;
