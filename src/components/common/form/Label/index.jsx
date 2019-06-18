import React from 'react';
import { Form } from 'react-bootstrap';

import styles from './styles.module.scss';

const Label = ({ label }) => {
  return <Form.Label className={styles.label}>{label}</Form.Label>;
};

export default Label;

