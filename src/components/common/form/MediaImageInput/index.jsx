import React, { Fragment } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Label from '../Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.scss';

const MediaImageInput = ({
  input,
  id,
  meta: { touched, error },
  label,
  required,
  onChange,
  onRemove,
  feedback,
  filePath,
}) => (
  <Form.Group>
    {!filePath && (
      <Fragment>
        <Label label={label} required={required} />
        <InputGroup>
          <Form.Control
            type="text"
            id={id}
            name={id}
            value={input.value}
            isInvalid={error && touched}
            readOnly
            hidden
          />
          <Button className={styles.button} variant="secondary">
            <label className={styles.label} htmlFor="single">
              <FontAwesomeIcon icon={faCamera} size="5x" />
            </label>
            <input type="file" id="single" onChange={onChange} hidden />
          </Button>
          {feedback && <Form.Text className="text-muted">{feedback}</Form.Text>}
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </InputGroup>
      </Fragment>
    )}
    {filePath && (
      <img src={filePath} className={styles.image} alt="uploaded_image" />
    )}
  </Form.Group>
);

export default MediaImageInput;
